// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideFooterResponsiveLayout from './layouts/HeaderAsideFooterResponsiveLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UserManagement from './pages/UserManagement';
import DetailInfo from './pages/DetailInfo';
import CaseTotal from './pages/CaseTotal';

import BlankLayout from './layouts/BlankLayout';

import HeaderAsideFooterLayout from './layouts/HeaderAsideFooterLayout';

const routerConfig = [
    {
      path: '/',
      layout: HeaderAsideFooterResponsiveLayout,
      component: UserManagement,
    },
  {
    path: '/permission/users',
    layout: HeaderAsideFooterResponsiveLayout,
    component: UserManagement,
  },
  {
    path: '/permission/details',
    layout: HeaderAsideFooterResponsiveLayout,
    component: DetailInfo,
  },
  {
    path: '/permission/total',
    layout: HeaderAsideFooterResponsiveLayout,
    component: CaseTotal,
  },
  {
    path: '*',
    layout: HeaderAsideFooterResponsiveLayout,
    component: NotFound,
  },
];

export default routerConfig;
