import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { commentPlugin } from '@vuepress/plugin-comment'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'

export default defineUserConfig({
  base: '/HNNUCAdocs/',

  lang: 'zh-CN',

  title: 'HNNUCAdocs',
  description: 'docs for HNNUCA',

  theme: defaultTheme({
    logo: '/logo/ji_xie_logo_removebg.png',

    // navbar 导航栏
    navbar: [
      { text: 'GitHub', link: 'https://github.com/yuwuweichun/HNNUCAdocs' },
    ],
    // sidebar 侧边栏
    sidebar: [
      { text: 'Welcome', link: '/' },
      {
        text: 'Tutorials',
        children: [
          { text: '在此之前', link: '/heretofore.md' },
          { text: '安装基本的软件', link: '/installing_basic_software.md' },
          { text: 'BetterCoding', link: '/better_coding.md' },
          { text: '你的网站是什么样子', link: '/look_like' },
          { text: '你的第一个网站', link: '/your_first_site.md' },
          { text: '部署', link: '/publishing.md' },
          { text: '进一步的学习', link: '/further.md' },
        ]
      },
      {
        text: 'Community',
        children: [
          { text: '头歌复制助手', link: '/copy_helper.md' },
          { text: '波老师的numpy教学', link: '/numpy.md' },
        ]
      },
      {
        text: 'SurviveHNNUManual',
        children: [
          { text: '体育选课不完全指北', link: 'PE_select.md' }
        ]
      }
    ] 

  }),

  plugins: [
    commentPlugin({
      provider: 'Giscus',
      repo: 'yuwuweichun/HNNUCAdocs', // GitHub 仓库
      repoId: 'R_kgDOM-_Z-Q', // 仓库 ID
      category: 'Announcements', // 分类
      categoryId: 'DIC_kwDOM-_Z-c4CjUMl', // 分类 ID
      comment: true, // 全局显示giscus
      mapping: 'pathname', // 映射策略
      strict: false, // 是否严格匹配 URL
      reactionsEnabled: true, // 是否启用反应
      emitMetadata: false, // 是否发出元数据
      inputPosition: 'top', // 输入框位置
      theme: 'preferred_color_scheme', // 主题
      lang: 'zh-CN', // 语言
      loading: 'eager', // 延迟加载：否
    }),
    markdownMathPlugin({
      mathjax: {
        loader: {
          load: ['input/tex', 'output/svg']
        },
        options: {
          tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            packages: ['base', 'ams', 'amsmath', 'amssymb', 'esint', 'newcommand']
          },
          svg: {
            fontCache: 'global'
          }
        }
      }
    })
  ],
  bundler: viteBundler(),
})