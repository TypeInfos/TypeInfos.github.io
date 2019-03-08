module.exports = {
  theme: 'reco',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/public'
      }
    }
  },
  themeConfig: {
    showParticles: false,
    // particlesConfig: {
    //   color: '0, 0, 0', //color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
    //   pointColor: '0, 0, 0', //color of points, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
    //   opacity: 0.5, // the opacity of line (0~1), default: 0.5.
    //   count: 60, // the number of lines, default: 66.
    //   zIndex: -1, // z-index property of the background, default: -1.
    // },
  },
  title: 'Kent', // 设置网站标题
  description: 'website',
  base: '/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '分类',
        items: [
          {
            text: '前端',
            link: '/categories/frontEnd'
          },
          {
            text: '工作',
            link: '/categories/work'
          },
          {
            text: '爱好',
            link: '/categories/hobby'
          }
        ]
      },
      {
        text: '关于我',
        link: '/about/'
      },
      {
        text: 'Tags',
        link: '/tags/'
      },
      {
        text: 'Github',
        link: 'https://github.com/TypeInfos'
      }
    ],
    // valine配置
    // valineConfig: {
    //   appId: 'WVINvnvFXAbxAjirQzbDruKP-gzGzoHsz', // your appId
    //   appKey: 'gar8bppl0vEVOiawaJUXrRM2', // your appKey
    // }
  }
}
