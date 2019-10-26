import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.prototype.axios=axios;
import App from './App'
//路由跳转前
router.beforeEach((to,from,next)=>{
  let isLogin=sessionStorage.getItem('isLogin');
  //注销
  if(to.path=='/logout'){
    sessionStorage.clear();
    next({path:'/login'});
  }else if(to.path=='/login'){
    if(isLogin!=null){
      next({path:'/main'});
    }
  }else if(isLogin==null){
    next({path:'/login'});
  }
  next();
});
// 安装路由
Vue.use(VueRouter);
// 安装 ElementUI
Vue.use(ElementUI);
//安装Vuex
Vue.use(Vuex);
new Vue({
  el: '#app',
  // 启用路由
  router,
  store,
  // 启用 ElementUI
  render: h => h(App)
});
