import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  // 默认跳转
  {
    path: '/',
    component: Layout,
    redirect: '/aggregated-resource-management'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // {
  //   path: '/firstPage',
  //   name: '首页',
  //   component: () => import('@/views/firstPage'),
  //   meta: { title: '首页', icon: '', isShowSidebar: false }
  // },
  {
    path: '/home',
    name: '首页',
    component: () => import('@/views/home/home'),
    meta: { title: '首页', icon: '', isShowSidebar: false }
  },
  // {
  //   path: '/visualResource',
  //   name: 'visualResource',
  //   component: () => import('@/views/visualResource'),
  //   meta: { title: '可视化资源监视', icon: '', isShowSidebar: false }
  // },
  // {
  //   path: '/storedEnergy/home',
  //   name: 'storedEnergy',
  //   component: () => import('@/views/storedEnergy'),
  //   meta: { title: '大屏', icon: '', isShowSidebar: false }
  // },
  // {
  //   path: '/storedEnergy/detailsPage',
  //   name: 'detailsPage',
  //   component: () => import('@/views/storedEnergy/detailsPage'),
  //   meta: { title: '站点详情', icon: '', isShowSidebar: false }
  // },
  {
    path: '/aggregated-resource-management',
    component: Layout,
    redirect: '/aggregated-resource-management/user-profile',
    children: [
      {
        path: 'user-profile',
        name: 'UserProfile',
        component: () => import('@/views/aggregated-resource-management/user-profile/user-profile'),
        meta: { title: '资源用户档案', icon: '', isShowSidebar: false }
      },
      // {
      //   path: 'polymerization',
      //   name: 'polymerization',
      //   component: () => import('@/views/aggregated-resource-management/polymerization/Internet.vue'),
      //   meta: { title: '物联档案管理', icon: '', isShowSidebar: false }
      // },
      // {
      //   path: 'dataMonitoring',
      //   name: 'dataMonitoring',
      //   component: () => import('@/views/aggregated-resource-management/dataMonitoring/dataMonitoring'),
      //   meta: { title: '量测数据监视', icon: '', isShowSidebar: false }
      // },
      // {
      //   path: 'powerPlantFile',
      //   name: 'powerPlantFile',
      //   component: () => import('@/views/aggregated-resource-management/powerPlantFile'),
      //   meta: { title: '虚拟电厂档案', icon: '', isShowSidebar: false }
      // },
      // {
      //   path: 'charging-pile',
      //   name: 'chargingPile',
      //   component: () => import('@/views/aggregated-resource-management/charging-pile'),
      //   meta: { title: '充电桩资源监视', icon: '', isShowSidebar: false }
      // },
      // {
      //   path: 'photovoltaic',
      //   name: 'photovoltaic',
      //   component: () => import('@/views/aggregated-resource-management/photovoltaic'),
      //   meta: { title: '光伏资源监视', icon: '', isShowSidebar: false }
      // },
      // {
      //   path: 'airResourceMonitoring',
      //   name: 'airResourceMonitoring',
      //   component: () => import('@/views/aggregated-resource-management/airResourceMonitoring'),
      //   meta: { title: '空调资源监视', icon: '', isShowSidebar: false }
      // }
      // {
      //   path: 'optimize',
      //   name: 'optimize',
      //   component: () => import('@/views/aggregated-resource-management/optimize/optimize'),
      //   meta: { title: '资源聚合优化', icon: '', isShowSidebar: false }
      // }
    ]
  },
  // {
  //   path: '/accessManagement',
  //   component: Layout,
  //   redirect: '/accessManagement/applyForAccess',
  //   meta: { title: '虚拟电厂接入管理', icon: '', isShowSidebar: true },
  //   children: [
  //     {
  //       path: 'applyForAccess',
  //       name: 'applyForAccess',
  //       component: () => import('@/views/accessManagement/applyForAccess'),
  //       meta: { title: '虚拟电厂接入申请', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'applyForAuditing',
  //       name: 'applyForAuditing',
  //       component: () => import('@/views/accessManagement/applyForAuditing'),
  //       meta: { title: '虚拟电厂接入审核', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'resourceVerification',
  //       name: 'resourceVerification',
  //       component: () => import('@/views/accessManagement/resourceVerification'),
  //       meta: { title: '虚拟电厂资源核查', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'ExitApplication',
  //       name: 'ExitApplication',
  //       component: () => import('@/views/accessManagement/ExitApplication'),
  //       meta: { title: '虚拟电厂退出申请', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'ExitManagement',
  //       name: 'ExitManagement',
  //       component: () => import('@/views/accessManagement/ExitManagement'),
  //       meta: { title: '虚拟电厂退出管理', icon: '', isShowSidebar: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/aggregationOptimization',
  //   component: Layout,
  //   redirect: '/aggregationOptimization/userBaseline',
  //   meta: { title: '资源聚合管理', icon: '', isShowSidebar: true },
  //   children: [
  //     {
  //       path: 'userBaseline',
  //       name: 'userBaseline',
  //       component: () => import('@/views/aggregationOptimization/userBaseline'),
  //       meta: { title: '用户基线管理', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'optimize',
  //       name: 'optimize',
  //       component: () => import('@/views/aggregationOptimization/optimize/optimize'),
  //       meta: { title: '资源评估', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'scheme',
  //       name: 'scheme',
  //       component: () => import('@/views/aggregationOptimization/scheme'),
  //       meta: { title: '协同方案', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'aggregation',
  //       name: 'aggregation',
  //       component: () => import('@/views/aggregationOptimization/aggregation'),
  //       meta: { title: '聚合优化', icon: '', isShowSidebar: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/proxyContract',
  //   component: Layout,
  //   redirect: '/proxyContract/proxy',
  //   meta: { title: '代理合约管理', icon: '', isShowSidebar: true },
  //   children: [
  //     {
  //
  //       path: 'proxy',
  //       name: 'proxy',
  //       component: () => import('@/views/proxyContract/proxy/index'),
  //       meta: { title: '代理合约管理', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'template',
  //       name: 'template',
  //       component: () => import('@/views/proxyContract/template'),
  //       meta: { title: '标准合同模板', icon: '', isShowSidebar: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/declaration',
  //   component: Layout,
  //   redirect: '/declaration/marketplace',
  //   meta: { title: '交易申报管理', icon: '', isShowSidebar: true },
  //   children: [
  //     {
  //       path: 'marketplace',
  //       name: 'marketplace',
  //       component: () => import('@/views/declaration/marketplace'),
  //       meta: { title: '市场信息管理', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'synergy',
  //       name: 'synergy',
  //       component: () => import('@/views/declaration/synergy'),
  //       meta: { title: '协同计划管理', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'transaction',
  //       name: 'transaction',
  //       component: () => import('@/views/declaration/transaction'),
  //       meta: { title: '日前交易申报', icon: '', isShowSidebar: true }
  //     }
  //     // {
  //     //   path: 'userBaseline',
  //     //   name: 'userBaseline',
  //     //   component: () => import('@/views/declaration/userBaseline'),
  //     //   meta: { title: '用户基线管理', icon: '', isShowSidebar: true }
  //     // }
  //   ]
  // },
  // {
  //   path: '/coordinationInteraction',
  //   component: Layout,
  //   redirect: '/coordinationInteraction/powerMonitoring',
  //   meta: { title: '协同互动响应', icon: '', isShowSidebar: true },
  //   children: [
  //     {
  //
  //       path: 'schedulingPlan',
  //       name: 'schedulingPlan',
  //       component: () => import('@/views/coordinationInteraction/schedulingPlan'),
  //       meta: { title: '日前调度计划', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'realTimeControl',
  //       name: 'realTimeControl',
  //       component: () => import('@/views/coordinationInteraction/realTimeControl'),
  //       meta: { title: '实时协同调控', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'powerMonitoring',
  //       name: 'powerMonitoring',
  //       component: () => import('@/views/coordinationInteraction/powerMonitoring'),
  //       meta: { title: '聚合功率监视', icon: '', isShowSidebar: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/dailyAndMonthlyManagement',
  //   component: Layout,
  //   redirect: '/dailyAndMonthlyManagement/dailyClearance',
  //   meta: { title: '结算管理', icon: '', isShowSidebar: true },
  //   children: [
  //     {
  //       path: 'dailyClearance',
  //       name: 'dailyClearance',
  //       component: () => import('@/views/dailyAndMonthlyManagement/dailyClearance'),
  //       meta: { title: '用户日清管理', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'settleAccount',
  //       name: 'settleAccount',
  //       component: () => import('@/views/dailyAndMonthlyManagement/settleAccount'),
  //       meta: { title: '零售分摊结算', icon: '', isShowSidebar: true }
  //     },
  //     {
  //       path: 'billManagement',
  //       name: 'billManagement',
  //       component: () => import('@/views/dailyAndMonthlyManagement/billManagement'),
  //       meta: { title: '月结账单管理', icon: '', isShowSidebar: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/systemManagement',
  //   component: Layout,
  //   redirect: '/systemManagement/userRegulation',
  //   meta: { title: '系统管理', icon: '', isShowSidebar: true },
  //   children: [
  //     {
  //       path: 'userRegulation',
  //       name: 'userRegulation',
  //       component: () => import('@/views/systemManagement/userRegulation'),
  //       meta: { title: '用户调节管理', icon: '', isShowSidebar: true }
  //     }
  //   ]
  // },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
  // base: '/jzjlcps/'
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
