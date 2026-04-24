import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import http from 'http';
import url from 'url';

const SCOPES = ['https://www.googleapis.com/auth/youtube.upload'];
const VIDEO_DIR = 'D:/产品视频/英文视频/完整英文视频';
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const VIDEO_IDS_PATH = path.join(process.cwd(), 'uploaded_videos.json');

interface VideoInfo {
  fileName: string;
  title: string;
  description: string;
  tags: string[];
  youtubeId?: string;
  youtubeUrl?: string;
}

const videos: VideoInfo[] = [
  { fileName: '01-Underground Equipment Connection.mp4', title: 'SmartDrill Underground Equipment Connection', description: 'Step-by-step guide to connecting SmartDrill underground equipment components. Learn how to properly set up and connect the magnetic guidance system components for directional drilling operations.', tags: ['SmartDrill', 'directional drilling', 'underground equipment', 'magnetic guidance'] },
  { fileName: '02-Ground Equipment Connection.mp4', title: 'SmartDrill Ground Equipment Setup', description: 'Quick overview of surface equipment installation for the SmartDrill magnetic guidance system. Covering ground station setup and antenna connections.', tags: ['SmartDrill', 'directional drilling', 'ground equipment', 'surface setup'] },
  { fileName: '03-Software Work Interface.mp4', title: 'SmartDrill Software Interface Guide', description: 'Navigate the SmartCross software interface with ease. Learn about real-time tracking, data visualization, and system configuration features.', tags: ['SmartDrill', 'SmartCross', 'software interface', 'directional drilling'] },
  { fileName: '04-Data Acquisition.mp4', title: 'SmartDrill Data Acquisition Tutorial', description: 'Learn how to acquire and interpret tracking data with the SmartDrill system. Master the techniques for accurate bore path monitoring.', tags: ['SmartDrill', 'data acquisition', 'tracking', 'directional drilling'] },
  { fileName: '05-Key Concepts.mp4', title: 'SmartDrill Key Concepts Explained', description: 'Understanding magnetic guidance fundamentals for directional drilling. Essential concepts for operators to master the SmartDrill system.', tags: ['SmartDrill', 'magnetic guidance', 'key concepts', 'directional drilling'] },
  { fileName: '06-the Secondary Driller’s Panel.mp4', title: 'SmartDrill Secondary Driller Panel', description: 'Guide to using the secondary driller panel for SmartDrill operations. Learn about monitoring and control features for assist drilling.', tags: ['SmartDrill', 'secondary driller', 'control panel', 'directional drilling'] },
  { fileName: 'BTS signal Analysis.mp4', title: 'SmartDrill BTS Signal Analysis', description: 'Learn how to analyze beacon tracking system signals for accurate directional drilling. Signal processing and interpretation techniques.', tags: ['SmartDrill', 'BTS', 'signal analysis', 'beacon tracking'] },
  { fileName: 'Beacon Trackers.mp4', title: 'SmartDrill Beacon Trackers Tutorial', description: 'Comprehensive guide to using beacon trackers in the SmartDrill magnetic guidance system. Setup, calibration, and operation techniques.', tags: ['SmartDrill', 'beacon tracker', 'magnetic guidance', 'directional drilling'] },
  { fileName: 'File.mp4', title: 'SmartDrill File Management', description: 'Learn how to manage project files and data in SmartDrill software. Import, export, and organize drilling data effectively.', tags: ['SmartDrill', 'file management', 'data management'] },
  { fileName: 'Plan Data.mp4', title: 'SmartDrill Plan Data Workflow', description: 'Efficient workflow for project planning and execution using SmartDrill. Create and manage drilling plans with precision.', tags: ['SmartDrill', 'plan data', 'project planning', 'directional drilling'] },
  { fileName: 'Survey data.mp4', title: 'SmartDrill Survey Data Processing', description: 'Learn how to process and analyze survey data for directional drilling projects. Survey data collection and interpretation guide.', tags: ['SmartDrill', 'survey data', 'data processing', 'directional drilling'] },
  { fileName: 'beacon measurement①-.mp4', title: 'SmartDrill Beacon Measurement Part 1', description: 'Beacon measurement techniques for the SmartDrill magnetic guidance system. Part 1 of the measurement series.', tags: ['SmartDrill', 'beacon measurement', 'magnetic guidance'] },
  { fileName: 'beacon measurement②-.mp4', title: 'SmartDrill Beacon Measurement Part 2', description: 'Beacon measurement techniques continued. Part 2 of the measurement series.', tags: ['SmartDrill', 'beacon measurement', 'magnetic guidance'] },
  { fileName: 'beacon measurement③-.mp4', title: 'SmartDrill Beacon Measurement Part 3', description: 'Advanced beacon measurement techniques. Part 3 of the measurement series.', tags: ['SmartDrill', 'beacon measurement', 'magnetic guidance'] },
  { fileName: 'beacon measurement④-.mp4', title: 'SmartDrill Beacon Measurement Part 4', description: 'Expert-level beacon measurement and calibration. Part 4 of the measurement series.', tags: ['SmartDrill', 'beacon measurement', 'magnetic guidance'] },
  { fileName: 'pressure vs. time.mp4', title: 'SmartDrill Pressure vs Time Analysis', description: 'Learn to interpret pressure data over time for drilling operations. Real-time monitoring of drilling parameters.', tags: ['SmartDrill', 'pressure monitoring', 'directional drilling'] },
  { fileName: 'settings.mp4', title: 'SmartDrill System Settings', description: 'Complete guide to SmartDrill system configuration and settings. Optimize your drilling system for maximum performance.', tags: ['SmartDrill', 'settings', 'system configuration'] },
];

function loadClientSecrets() {
  const clientSecretPath = path.join(process.cwd(), 'client_secret.json');
  const content = fs.readFileSync(clientSecretPath, 'utf-8');
  return JSON.parse(content);
}

async function getAuthenticatedClient() {
  const credentials = loadClientSecrets();
  const { client_id, client_secret, redirect_uris } = credentials.installed;

  const oauth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf-8'));
    oauth2Client.setCredentials(token);
    return oauth2Client;
  }

  throw new Error('No token found, please run auth first');
}

async function uploadVideoSimple(auth: any, video: VideoInfo): Promise<VideoInfo> {
  const filePath = path.join(VIDEO_DIR, video.fileName);

  if (!fs.existsSync(filePath)) {
    console.error(`文件不存在: ${filePath}`);
    return { ...video, youtubeId: 'FILE_NOT_FOUND', youtubeUrl: '' };
  }

  const youtube = google.youtube({ version: 'v3', auth });

  const requestBody = {
    snippet: {
      title: video.title,
      description: video.description,
      tags: video.tags,
      categoryId: '28',
    },
    status: {
      privacyStatus: 'public',
      selfDeclaredMadeForKids: false,
    },
  };

  const fileSize = fs.statSync(filePath).size;
  console.log(`  文件大小: ${(fileSize / 1024 / 1024).toFixed(1)} MB`);

  const media = {
    body: fs.createReadStream(filePath),
  };

  console.log(`  开始上传...`);

  try {
    const response = await youtube.videos.insert({
      part: ['snippet', 'status'],
      requestBody,
      media,
    });

    const youtubeId = response.data.id || '';
    const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
    console.log(`  ✅ 成功! ID: ${youtubeId}`);

    return { ...video, youtubeId, youtubeUrl };
  } catch (error: any) {
    console.error(`  ❌ 失败: ${error.message}`);
    return { ...video, youtubeId: 'ERROR: ' + error.message, youtubeUrl: '' };
  }
}

async function main() {
  console.log('=== SmartDrill YouTube 批量上传工具 ===\n');

  const auth = await getAuthenticatedClient();

  // 加载已上传的记录
  let results: VideoInfo[] = [];
  if (fs.existsSync(VIDEO_IDS_PATH)) {
    results = JSON.parse(fs.readFileSync(VIDEO_IDS_PATH, 'utf-8'));
    console.log(`找到已上传记录: ${results.filter(v => v.youtubeId && !v.youtubeId.startsWith('ERROR') && !v.youtubeId.startsWith('FILE')).length} 个视频\n`);
  }

  // 上传所有视频
  for (const video of videos) {
    const existing = results.find(v => v.fileName === video.fileName && v.youtubeId && !v.youtubeId.startsWith('ERROR') && !v.youtubeId.startsWith('FILE'));
    if (existing) {
      console.log(`⏭️  跳过已上传: ${video.fileName}`);
      continue;
    }

    console.log(`\n📤 上传: ${video.fileName}`);
    const result = await uploadVideoSimple(auth, video);
    results.push(result);

    // 保存进度
    fs.writeFileSync(VIDEO_IDS_PATH, JSON.stringify(results, null, 2));

    // 等待一下避免限流
    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  console.log('\n=== 上传完成 ===');
  const successCount = results.filter(v => v.youtubeId && !v.youtubeId.startsWith('ERROR') && !v.youtubeId.startsWith('FILE')).length;
  console.log(`成功: ${successCount}/${videos.length}`);

  console.log('\n📋 视频链接列表:');
  results.forEach(v => {
    if (v.youtubeUrl) {
      console.log(`  ${v.fileName}`);
      console.log(`    ${v.youtubeUrl}`);
    }
  });
}

main().catch(console.error);
