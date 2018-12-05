
import Vue from 'vue'
import Router from 'vue-router'

import DocsAbout from './docs/DocsAbout.vue'
import DocsHome from './docs/DocsHome.vue'

import Docs from './Docs.vue'


Vue.config.productionTip = false

Vue.use(Router)
let router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: DocsHome
    },
    {
      path: '/about',
      name: 'about',
      component: DocsAbout
    },
    {
      path: '/installation',
      name: 'installation',
      component: () => import('./docs/DocsInstallation.vue')
    },

    {
      path: '/elements/buttons',
      name: 'docsButtons',
      component: () => import('./docs/DocsButtons.vue')
    },
    {
      path: '/elements/icons',
      name: 'docsIcons',
      component: () => import('./docs/DocsIcons.vue')
    },
    {
      path: '/elements/label',
      name: 'docsLabel',
      component: () => import('./docs/DocsLabel.vue')
    },
    {
      path: '/elements/code',
      name: 'docsCode',
      component: () => import('./docs/DocsCode.vue')
    },
    {
      path: '/elements/media',
      name: 'docsMedia',
      component: () => import('./docs/DocsMedia.vue')
    },
    {
      path: '/elements/table',
      name: 'docsTable',
      component: () => import('./docs/DocsTable.vue')
    },

    {
      path: '/layout/hero',
      name: 'docsHero',
      component: () => import('./docs/DocsHero.vue')
    },
    {
      path: '/layout/flexbox',
      name: 'docsFlexbox',
      component: () => import('./docs/DocsFlexbox.vue')
    },
    {
      path: '/layout/responsive',
      name: 'docsFlexboxResponsive',
      component: () => import('./docs/DocsFlexboxResponsive.vue')
    },
    {
      path: '/layout/navbar',
      name: 'docsNavbar',
      component: () => import('./docs/DocsNavbar.vue')
    },
    
    {
      path: '/components/avatars',
      name: 'docsAvatars',
      component: () => import('./docs/DocsAvatars.vue')
    },
    {
      path: '/components/badges',
      name: 'docsBadges',
      component: () => import('./docs/DocsBadge.vue')
    },
    {
      path: '/components/breadcrumbs',
      name: 'docsBreadcrumbs',
      component: () => import('./docs/DocsBreadcrumbs.vue')
    },
    {
      path: '/components/cards',
      name: 'docsCard',
      component: () => import('./docs/DocsCards.vue')
    },
    {
      path: '/components/chips',
      name: 'docsChip',
      component: () => import('./docs/DocsChip.vue')
    },
    {
      path: '/components/empty-states',
      name: 'docsEmptyStates',
      component: () => import('./docs/DocsEmptyStates.vue')
    },
    {
      path: '/components/menu',
      name: 'docsMenu',
      component: () => import('./docs/DocsMenu.vue')
    },
    {
      path: '/components/modals',
      name: 'docsModal',
      component: () => import('./docs/DocsModal.vue')
    },
    {
      path: '/components/nav',
      name: 'docsNav',
      component: () => import('./docs/DocsNav.vue')
    },

    {
      path: '/components/steps',
      name: 'docsStep',
      component: () => import('./docs/DocsStep.vue')
    },
    {
      path: '/components/tile',
      name: 'docsTile',
      component: () => import('./docs/DocsTile.vue')
    },
    {
      path: '/components/toast',
      name: 'docsToast',
      component: () => import('./docs/DocsToast.vue')
    },

    {
      path: '/utilities/divider',
      name: 'docsDivider',
      component: () => import('./docs/DocsDivider.vue')
    },
    {
      path: '/utilities/link',
      name: 'docsLink',
      component: () => import('./docs/DocsLink.vue')
    }
  ]
})

new Vue({
  router,
  render: h => h(Docs)
}).$mount('#app')