import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../components/Not'
import HomeTab from '../components/HomeTab'
import Post from '../components/post/Post'
import Mypage from '../components/mypage/Mypage'
import Pickup from '../components/Pickup'
import {fb} from '../firebase'

Vue.use(VueRouter)

  const routes = [
  //ホーム画面
  {
    path: '/',
    name:'Home',
    component: HomeTab,
    props:true,
  },
  //投稿ページ
  {
    path: '/post',
    name: 'Post',
    component: Post,
    meta:{requiresAuth:true}
  },
  //マイページ
  {
    path: '/mypage',
    name:'Mypage',
    component: Mypage,
    meta:{requiresAuth:true}
  },
  //画像詳細ページ
  {
    path:'/pickup/:post',
    name:'Pickup',
    component: Pickup,
    meta:{requiresAuth:true},
  },
  //エラーページ
  {
    path:'*',
    component:NotFound
  }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

//ページ遷移時のナビゲーションガード
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(recode => recode.meta.requiresAuth);
  if (requiresAuth && !(await fb.getCurrentUser())) {
    alert('ログインが確認できません')
    next({ path: "/", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});


export default router
