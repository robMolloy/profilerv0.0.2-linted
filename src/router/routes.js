import PageIndex from 'src/pages/PageIndex.vue';
import PageAuth from 'src/pages/PageAuth.vue';
import PageChats from 'src/pages/PageChats.vue';
import PageUsers from 'src/pages/PageUsers.vue';
import PageProfiles from 'src/pages/PageProfiles';
// import PageCssTest from 'src/pages/tests/CssTest.vue';
// import SyncTestParent from "src/pages/tests/sync/SyncTestParent.vue";
// import SyncTestParent from "src/pages/tests/sync2/SyncTestParent.vue";
import TestPage from 'src/pages/tests/image-carousel/PageImageCarousel';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'PageIndex', path: '', component: PageIndex },
      { name: 'PageTest', path: 'test', component: TestPage },
      // { name: "PageTest", path: "test", component: PageCssTest },
      {
        name: 'PageAuth',
        path: 'auth',
        component: PageAuth,
        meta: { requiresUnauthentication: true },
      },
      {
        name: 'PageChats',
        path: 'chats/:uid2',
        component: PageChats,
        props: true,
        meta: { requiresAuthentication: true },
      },
      {
        name: 'PageUsers',
        path: 'users',
        component: PageUsers,
        meta: { requiresAuthentication: true },
      },
      {
        name: 'PageProfiles',
        path: 'profiles',
        component: PageProfiles,
        meta: { requiresAuthentication: true },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('src/pages/PageError.vue'),
  },
];

export default routes;
