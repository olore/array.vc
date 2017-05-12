import Vue from 'vue';
import Router from 'vue-router';

import Advisors from '@/components/pages/Advisors';
import Home from '@/components/pages/Home';
import Investments from '@/components/pages/Investments';
import PodCasts from '@/components/pages/Podcasts';
import Team from '@/components/pages/Team';

import Shruti from '@/components/team/Shruti';
import Lucas from '@/components/team/Lucas';
import Joseph from '@/components/team/Joseph';

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
    {
      path: '/podcasts',
      name: 'podcasts',
      component: PodCasts,
    },

    {
      path: '/advisors',
      name: 'Advisors',
      component: Advisors,
    },
    // team
    {
      path: '/team/shruti',
      name: 'shruti',
      component: Shruti,
    },
    {
      path: '/team/joseph',
      name: 'joseph',
      component: Joseph,
    },
    {
      path: '/team/lucas',
      name: 'lucas',
      component: Lucas,
    },
  ],
});

router.afterEach((to) => {
  window.ga('send', 'pageview', `#${to.path}`);
});

export default router;
