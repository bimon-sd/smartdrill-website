# SmartDrill 多页网站设计文档

## 概述

将 SmartDrill 现有单页落地页改造为正规多页网站，提升专业感和可维护性。

---

## 1. 技术栈

- **框架：** Next.js 15 (App Router)
- **语言：** TypeScript
- **样式：** Tailwind CSS
- **代码检查：** ESLint
- **现有组件：** Header, Hero, Features, VideoSection, About, Contact, Footer

---

## 2. 页面结构

| 序号 | 页面名称 | 路径 | 说明 |
|------|----------|------|------|
| 1 | 首页 | `/` | 全屏 Hero + 产品展示 |
| 2 | Features | `/features` | 产品特性详情 |
| 3 | Videos | `/videos` | 视频展示页面 |
| 4 | Case Studies | `/case-studies` | 工程案例列表 |
| 5 | Case Study 详情 | `/case-studies/[slug]` | 单个案例图文详情 |
| 6 | About | `/about` | 关于我们 |
| 7 | Contact | `/contact` | 联系方式 |

---

## 3. 页面详细设计

### 3.1 首页 (`/`)

**Hero 区域：**
- 全屏背景图：选用最具冲击力的工程现场案例图（HutuoRiver 2,500m 或 Qinghai Yellow River）
- 叠加黑色半透明遮罩
- 白色大字号标语（如 "Precision HDD Intersection System"）
- 附简短副标题

**产品展示区域（Hero 下方）：**
- 标题："Complete System Delivered"
- 横向排列 2 张开箱图（设备全新到货、分两箱包装）
- 配文字说明："Full System · 2-Crate Export Packaging · Ready to Deploy"
- 简洁克制，不做过度设计

**案例预览区域：**
- 标题："Featured Projects"
- 6 张代表性工程案例现场图网格（2行3列）
- 每张配项目名称 + 简要指标（如穿越长度）
- 底部"View All Case Studies →"按钮跳转 `/case-studies`

**现有组件保留：**
- Features 简略版（保留标题和核心要点，不展开）
- Footer

### 3.2 Features 页面 (`/features`)

- 完整展示 Features 组件（当前单页的 Features 全部内容）
- 页面标题：产品特性 / Product Features
- 保持现有卡片式布局，增加页面专属 Hero 图

### 3.3 Videos 页面 (`/videos`)

- 页面标题：视频演示 / Videos
- 展示英文完整视频（路径：D:\产品视频\英文视频\完整英文视频）
- 提供视频下载或内嵌播放
- 视频下方可添加简短描述文字

### 3.4 Case Studies 列表页 (`/case-studies`)

- 页面标题：工程案例 / Case Studies
- 网格布局展示所有 10 个工程案例
- 每个案例卡片：封面图 + 项目名称 + 核心数据（如穿越长度）
- 封面图：每个案例文件夹中的第一张图片

**案例列表（10个）：**

| 序号 | 项目名称 | slug |
|------|----------|------|
| 1 | Binzhou Port – Xinyue Oil Pipeline Salt Field HDD Intersect (3,021m) | binzhou-port |
| 2 | HutuoRiver HDD Intersect (2,500m) | hutuo-river |
| 3 | Leshan Shengli Village Tunnel Drainage Hole Directional Drilling Project | leshan-shengli |
| 4 | Line 3 of West-East Gas Pipeline Tuanhe River Crossing Project | west-east-gas-line3 |
| 5 | Meitan-Weng'an Natural Gas Pipeline Project Wujiang River HDD | meitan-wengan |
| 6 | Qinghai Yellow River Crossing Project (Pilot-Hole Encounter) | qinghai-yellow-river |
| 7 | Qiupu River Directional Drilling Project (Pilot-Hole Encounter) | qiupu-river |
| 8 | Sino – Kuwait Gas Pipeline B7 HDD Intersect (2,718.8m) | sino-kuwait-b7 |
| 9 | Yantai Port Crude Oil Pipeline North Jiaolai River HDD (2,250m) | yantai-port |
| 10 | 欧洲客户反馈 | europe-feedback |

### 3.5 Case Study 详情页 (`/case-studies/[slug]`)

- 动态路由，根据 slug 加载对应案例内容
- 页面顶部：大尺寸封面图（横跨页面宽度）
- 项目名称（标题）
- 关键参数（长度、管径、地质条件、穿越长度等）
- 案例描述文字（来自"新建 文本文档.txt"）
- 图册：展示案例文件夹内所有图片，支持点击放大
- 底部：相邻案例导航（上一个/下一个）

**欧洲客户反馈案例（无文字描述）：**
- 标题：European Customer Feedback
- 全部为图片，图片下方可加简短英文说明（如 "On-site installation" 或留空）
- 图片排版：2-3 列网格

### 3.6 About 页面 (`/about`)

- 保留现有 About 组件
- 增加页面专属 Hero
- 可补充公司/产品背景文字（待用户提供）

### 3.7 Contact 页面 (`/contact`)

- 保留现有 Contact 组件
- 增加页面专属 Hero

---

## 4. 导航结构

**顶部导航栏（Header）：**

```
SmartDrill Logo | Home | Features | Videos | Case Studies | About | Contact
```

- 固定顶部，滚动时保持可见
- 当前页面链接高亮显示
- 移动端：汉堡菜单，侧滑抽屉导航

---

## 5. 布局与样式规范

**通用布局：**
- 最大内容宽度：1280px（水平居中）
- 页面内边距：移动端 24px，桌面端 48px
- 组件间距：统一使用 Tailwind spacing scale

**色彩方案（维持现有）：**
- 背景：黑色 `#000`
- 文字：白色 `#fff`
- 强调色：蓝色（如需）

**字体：**
- 标题：粗体，字号层级清晰
- 正文：常规字重，行高舒适

---

## 6. 组件结构

```
src/
├── app/
│   ├── page.tsx                    # 首页 /
│   ├── features/page.tsx            # Features /features
│   ├── videos/page.tsx             # Videos /videos
│   ├── case-studies/
│   │   ├── page.tsx               # 案例列表 /case-studies
│   │   └── [slug]/page.tsx        # 案例详情 /case-studies/[slug]
│   ├── about/page.tsx             # About /about
│   ├── contact/page.tsx           # Contact /contact
│   ├── layout.tsx                  # 根布局（含 Header + Footer）
│   └── globals.css
├── components/
│   ├── Header.tsx                  # 导航栏（各页面通用）
│   ├── Footer.tsx                  # 页脚（各页面通用）
│   ├── Hero.tsx                    # 全屏 Hero 组件
│   ├── Features.tsx               # 产品特性
│   ├── VideoSection.tsx            # 视频区
│   ├── About.tsx                  # 关于我们
│   ├── Contact.tsx                # 联系方式
│   └── CaseStudyCard.tsx           # 案例卡片（新增）
└── lib/
    └── caseStudies.ts             # 案例数据 + 类型定义（新增）
```

---

## 7. 案例数据管理

**方案：使用静态 TypeScript 数据文件**

新建 `src/lib/caseStudies.ts`，集中管理所有案例元数据：

```typescript
export interface CaseStudy {
  slug: string;
  title: string;
  coverImage: string;       // 案例文件夹中的封面图路径
  stats: {
    length?: string;
    pipeSpec?: string;
    elevation?: string;
    formation?: string;
  };
  description: string;      // 来自"新建 文本文档.txt"
  images: string[];          // 案例文件夹中所有图片路径
}
```

案例图片路径：
`D:\0_Smartdrill\CASE\[案例文件夹]\*.png`

---

## 8. 待确认事项

- [ ] About 页面是否需要补充公司介绍文字？如需要请提供
- [ ] Contact 页面联系信息（邮箱、电话、地址）是否正确？
- [ ] Videos 页面视频文件格式？是否需要内嵌播放器？

---

## 9. 实施顺序建议

1. 创建案例数据文件 `src/lib/caseStudies.ts`
2. 创建 `CaseStudyCard` 组件
3. 创建 `case-studies` 和 `case-studies/[slug]` 页面
4. 改造 `app/page.tsx` 为首页（含 Hero + 产品展示 + 案例预览）
5. 创建 `/features`、`/videos`、`/about`、`/contact` 页面
6. 调整 Header 导航（当前单页跳转 → 路由跳转）
7. 全站样式微调与测试
