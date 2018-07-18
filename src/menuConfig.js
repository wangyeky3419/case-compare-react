// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  }
];

const asideMenuConfig = [
  //   {
  //     name: '我的工作台',
  //     path: '/',
  //     icon: 'home',
  //   },
  {
    name: '管理',
    path: '/permission',
    icon: 'home',
    children: [
      { name: '案例关联分析', path: '/permission/users' },
      { name: '案例关联查询', path: '/permission/details' },
      { name: '案例关联统计汇总', path: '/permission/total' },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
