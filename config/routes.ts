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
      {
        path: '/classcomponent/class-params',
        name: 'class-params',
        component: './ClassParams',
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
      {
        path: '/functioncomponent/function-params',
        name: 'function-params',
        component: './FunctionParams',
      },
      {
        path: '/functioncomponent/function-children',
        name: 'function-children',
        component: './FunctionChildren',
      },
      {
        path: '/functioncomponent/function-slot',
        name: 'function-slot',
        component: './FunctionSlot',
      },
      {
        path: '/functioncomponent/function-use-reducer',
        name: 'function-use-reducer',
        component: './FunctionUseReducer',
      },
      {
        path: '/functioncomponent/function-use-callback',
        name: 'function-use-callback',
        component: './FunctionUseCallback',
      },
      {
        path: '/functioncomponent/function-use-memo',
        name: 'function-use-memo',
        component: './FunctionUseMemo',
      },
      {
        path: '/functioncomponent/function-use-ref',
        name: 'function-use-ref',
        component: './FunctionUseRef',
      },
      {
        path: '/functioncomponent/function-use-imperative-handle',
        name: 'function-use-imperative-handle',
        component: './FunctionUseImperativeHandle',
      },
      {
        path: '/functioncomponent/function-use-layout-effect',
        name: 'function-use-layout-effect',
        component: './FunctionUseLayoutEffect',
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
