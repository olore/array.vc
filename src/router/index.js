import Vue from 'vue';
import Router from 'vue-router';

import Advisors from '@/components/pages/Advisors';
import Home from '@/components/pages/Home';
import Investments from '@/components/pages/investments/Investments';
import Growth from '@/components/pages/growth/Growth';
import Podcasts from '@/components/pages/Podcasts';
import Team from '@/components/pages/Team';
import News from '@/components/pages/News';

import Shruti from '@/components/team/Shruti';
import Lucas from '@/components/team/Lucas';

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
      path: '/growth',
      name: 'Growth',
      component: Growth,
    },
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/podcasts',
      name: 'podcasts',
      component: Podcasts,
    },
    {
      path: '/advisors/:field?',
      name: 'Advisors',
      component: Advisors,
      props: true,
    },
    // team
    {
      path: '/team/shruti',
      name: 'shruti',
      component: Shruti,
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
