import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Searchresult from '@/components/Searchresult'
import Bookdetail from '@/components/Bookdetail'
import Bookcomment from '@/components/Bookcomment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path:'/Searchresult',
      name:'Searchresult',
      component: Searchresult,
    },
    {
      path:'/Bookdetail',
      name:'Bookdetail',
      component: Bookdetail,
    },
    {
      path:'/Bookcomment',
      name:'Bookcomment',
      component:Bookcomment,
    }
  ]
})

