import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Team from '@/components/Team';
import Investments from '@/components/Investments';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/team',
      name: 'Team',
      component: Team,
    },
    {
      path: '/investments',
      name: 'Investments',
      component: Investments,
    },
  ],
});

router.afterEach((to) => {
  window.ga('send', 'pageview', to.path);
});

export default router;
