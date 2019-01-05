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
          '/blog/JavaScript/学会了ES6，就不会写出那样的代码', // 你的md文件地址
        ]
      },
      {
        title: 'CSS',
        collapsable: true,
        children: [
          '/blog/CSS/搞懂Z-index的所有细节',
        ]
      },
      {
        title: 'HTTP',
        collapsable: true,
        children: [
          '/blog/HTTP/认识HTTP-Cookie和Session篇',
        ]
      },
    ]
  }
}
