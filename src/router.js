import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

const WidthHeightTest = () => import('./components/WidthHeightTest.vue');
const MaxHeightTest = () => import('./components/MaxHeightTest.vue');
const ContentTest = () => import('./components/ContentTest.vue');
const CssCounterTest = () => import('./components/CssCounterTest.vue');
const PaddingTest = () => import('./components/PaddingTest.vue');
const MarginTest = () => import('./components/MarginTest.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'view home',
      redirect: '/whTest',
      component: Home,
      children: [
        { path: 'whTest', name: 'view whTest', component: WidthHeightTest },
        { path: 'mhTest', name: 'view mhTest', component: MaxHeightTest },
        { path: 'cTest', name: 'view cTest', component: ContentTest },
        { path: 'ccTest', name: 'view ccTest', component: CssCounterTest},
        { path: 'pTest', name: 'view pTest', component: PaddingTest},
        { path: 'mTest', name: 'view mTest', component: MarginTest},
      ]
    },
  ],
});
