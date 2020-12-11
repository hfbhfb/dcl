module.exports = {
  title: '点餐了菜单',
  description: '专注餐饮本管理系统,维护店家权益',
  base: '/dcl/',
  themeConfig: {
    nav: [
      { text: '应用场景', link: '/' },
      { text: '使用方式', link: '/info/one' },
    ],



    sidebar: [
      {
        title: '产品定位与应用场景',   // 必要的
        path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
        ]
      },
      {
        title: '如何使用',   // 必要的
        path: '/info/one',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
        ]
      }
    ]






  }
}





