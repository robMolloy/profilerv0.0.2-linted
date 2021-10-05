import { sendNext } from 'src/utils/utilsSendNext';
import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  Router.beforeEach((to, from, next) => {
    const { requiresAuthentication, requiresUnauthentication } = to.meta;
    const isAuthenticated = store.getters['auth/isAuthenticated'];

    // const uid = store.getters["auth/uid"];
    // if (isAuthenticated && uid) userIsActive(uid);

    if (isAuthenticated && requiresUnauthentication) {
      console.error(`"${to.path}" requires unauthentication`);
      next('/users');
    } else if (!isAuthenticated && requiresAuthentication) {
      console.error(`"${to.path}" requires authentication`);
      sendNext(to.path);
      next('/auth');
    } else {
      next();
    }
  });

  return Router;
}
