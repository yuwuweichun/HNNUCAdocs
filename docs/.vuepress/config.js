import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { commentPlugin } from '@vuepress/plugin-comment'

export default defineUserConfig({
  base:'/HNNUCAdocs/',

  lang: 'zh-CN',

  title: 'HNNUCAdocs',
  description: 'docs for HNNUCA',

  theme: defaultTheme({
    logo: '/logo/ji_xie_logo_removebg.png',

    // navbar 导航栏
    navbar: [
      {text: 'GitHub', link:'https://github.com/yuwuweichun/HNNUCAdocs'},
    ],
    // sidebar 侧边栏
    sidebar: [
      {text: 'Welcome!', link: '/'},
      {text: '在此之前', link: '/heretofore.md'},
      {text: '安装基本的软件', link: '/installing_basic_software.md'},
      {text: 'BetterCoding', link:'/better_coding.md'},
      {text: '你的网站是什么样子', link: '/look_like'},
      {text: '你的第一个网站', link: '/your_first_site.md'},
      {text: '部署', link: '/publishing.md'},
      {text: '进一步的学习', link: '/further.md'},
    ]

  }),

  plugins: [
      commentPlugin({
      provider: 'Giscus',
      repo: 'yuwuweichun/HNNUCAdocs', // GitHub 仓库
      repoId: 'R_kgDOM-_Z-Q', // 仓库 ID
      category: 'Announcements', // 分类
      categoryId: 'DIC_kwDOM-_Z-c4CjUMl', // 分类 ID
      mapping: 'pathname', // 映射策略
      strict: false, // 是否严格匹配 URL
      reactionsEnabled: true, // 是否启用反应
      emitMetadata: false, // 是否发出元数据
      inputPosition: 'top', // 输入框位置
      theme: 'preferred_color_scheme', // 主题
      lang: 'zh-CN', // 语言
      loading: 'lazy', // 延迟加载
      })
  ],
  bundler: viteBundler(),
})
