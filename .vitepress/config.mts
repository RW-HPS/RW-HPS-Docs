import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "RW-HPS",
  description: "RW-HPS教程文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/imgs/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: '使用手册',
        items: [
        { text: 'START', link: '/start/info' },
        // { text: 'options-2', link: 'http://www.baidu.com' }
      ]
      }
      ],

      sidebar: {
        '/start/info': [
          {
            text: '目录',
            items: [
              { text: '从零开始的RW-HPS生活', link: '/start/info' },
              { text: '开始安装并使用', link: '/guide/install' },
              { text: '自定义配置项', link: '/start/config' },
              { text: '发布', link: '/guide/deploying' }
            ]
          }
        ]
      },

    
    // sidebar: [
    //   {
    //     text: '从零开始的RW-HPS生活',
    //     items: [
    //       { text: '开始', link: '/guide/' }, // /guide/index.md
    //     ]
    //   }
    // ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/RW-HPS/RW-HPS' }
    ]
  }
})
