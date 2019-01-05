module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [{
      text: 'Languages',
      items: [{
          text: 'Chinese',
          link: '/language/chinese'
        },
        {
          text: 'Japanese',
          link: '/language/japanese'
        }
      ]
    }],
    sidebar: [{
        title: 'JavaScript', // 侧边栏名称
        collapsable: true, // 可折叠
        children: [
          '', // 你的md文件地址
        ]
      },
      {
        title: 'CSS',
        collapsable: true,
        children: [
          '',
        ]
      },
      {
        title: 'HTTP',
        collapsable: true,
        children: [
          '',
        ]
      },
    ]
  }
}
