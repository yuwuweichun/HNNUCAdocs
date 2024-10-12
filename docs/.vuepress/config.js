import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base:'/HNNUCAdocs',

  lang: 'zh-CN',

  title: 'HNNUCAdocs',
  description: 'docs for HNNUCA',

  theme: defaultTheme({
    logo: '/logo/ji_xie_logo_removebg.png',

    // navbar 导航栏
    navbar: [
      
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
      {text: '进一步的学习', link: '/further.md'}
    ]

  }),

  bundler: viteBundler(),
})
