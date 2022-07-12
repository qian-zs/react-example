export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/classcomponent',
    name: 'class.component',
    icon: 'CodepenOutlined',
    routes: [
      {
        path: '/classcomponent/default',
        name: 'default',
        component: './ClassComponent',
      },
    ],
  },
  {
    path: '/functioncomponent',
    name: 'function.component',
    icon: 'CodeSandboxOutlined',
    routes: [
      {
        path: '/functioncomponent/default',
        name: 'default',
        component: './FunctionComponent',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
