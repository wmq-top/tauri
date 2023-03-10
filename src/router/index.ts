import { createRouter, createWebHashHistory } from 'vue-router'

import staticRoute from '@/router/staticRoute'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...staticRoute ]
})

export default router