import router from './router'
import store from './store'
import { getToken } from '@/utils/auth' // get token from cookie

router.beforeEach((to, from, next) => {

  const hasToken = getToken()
  console.log(hasToken, '---------hasToken');
  if (hasToken) {
    // 登录过就不能访问登录界面，需要中断这一次路由守卫，执行下一次路由守卫，并且下一次守卫的to是主页'
    // if (to.path === '/login') {
    //   next({ path: '/' })
    // }
    // 保存在store中路由不为空则放行(如果执行了刷新操作，则 store 里的路由为空，此时需要重新添加路由)
    // if (store.getters.routes != null) {
    //放行
    next()
    // } else {
    //   // 将路由添加到 store 中，用来标记已添加动态路由
    //   store.commit('ADD_ROUTER', '需要添加的路由')
    //   router.addRoutes('需要添加的路由')
    //   // 如果 addRoutes 并未完成，路由守卫会一层一层的执行执行，直到 addRoutes 完成，找到对应的路由
    //   next({ ...to, replace: true })
    // }
  } else {
    /* has no token*/
    if (to.path !== '/login') {
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  // NProgress.done()
})
