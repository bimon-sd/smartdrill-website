import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/youtube.upload'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');

/**
 * 从 client_secret.json 加载 OAuth 客户端配置
 */
function loadClientSecrets(): { installed: { client_id: string; client_secret: string; redirect_uris: string[] } } {
  const clientSecretPath = path.join(process.cwd(), 'client_secret.json');
  const content = fs.readFileSync(clientSecretPath, 'utf-8');
  return JSON.parse(content);
}

/**
 * 获取或刷新 access token
 */
export async function getAuthenticatedClient() {
  const credentials = loadClientSecrets();
  const { client_id, client_secret, redirect_uris } = credentials.installed;

  const oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  // 检查是否已有 token
  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf-8'));
    oauth2Client.setCredentials(token);
    return oauth2Client;
  }

  // 生成授权 URL
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('请访问以下链接授权：');
  console.log(authUrl);
  console.log('\n授权后将显示代码，请粘贴到这里：');

  // 手动输入授权码（首次需要）
  const readline = await import('readline');
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const code = await new Promise<string>((resolve) => {
    rl.question('请输入授权码：', resolve);
  });
  rl.close();

  // 用授权码换取 token
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  // 保存 token 供下次使用
  fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
  console.log('Token 已保存到 token.json');

  return oauth2Client;
}

/**
 * 上传视频到 YouTube
 */
export async function uploadVideo(options: {
  filePath: string;
  title: string;
  description: string;
  tags?: string[];
}) {
  const auth = await getAuthenticatedClient();
  const youtube = google.youtube({ version: 'v3', auth });

  const fileSize = fs.statSync(options.filePath).size;
  const fileName = path.basename(options.filePath);

  const requestBody = {
    snippet: {
      title: options.title,
      description: options.description,
      tags: options.tags || [],
      categoryId: '28', // Science & Technology
    },
    status: {
      privacyStatus: 'public',
      selfDeclaredMadeForKids: false,
    },
  };

  const media = {
    body: fs.createReadStream(options.filePath),
  };

  try {
    const response = await youtube.videos.insert(
      {
        part: ['snippet', 'status'],
        requestBody,
        media,
      },
      {
        // 使用 onUploadProgress 监控进度
        onUploadProgress: (evt: { bytesWritten: number }) => {
          const progress = ((evt.bytesWritten / fileSize) * 100).toFixed(2);
          process.stdout.write(`\r上传进度: ${progress}%`);
        },
      }
    );

    console.log('\n上传成功！');
    console.log(`视频ID: ${response.data.id}`);
    console.log(`链接: https://www.youtube.com/watch?v=${response.data.id}`);
    return response.data;
  } catch (error) {
    console.error('上传失败:', error);
    throw error;
  }
}

// CLI 测试
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    console.log('用法: npx ts-node src/lib/youtube.ts <视频文件路径> <标题> <描述> [标签1,标签2,...]');
    process.exit(1);
  }

  const [filePath, title, description, tagsStr] = args;
  const tags = tagsStr ? tagsStr.split(',') : ['SmartDrill', 'directional drilling'];

  uploadVideo({ filePath, title, description, tags })
    .then(() => console.log('\n完成！'))
    .catch((err) => console.error('错误:', err));
}
