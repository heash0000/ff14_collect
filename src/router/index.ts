import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainView from '../views/MainDataView.vue'
import MinDataiView from '../components/MiniDataView.vue'
import RideDataView from '@/components/RideDataView.vue'
import MusicDataView from '@/components/MusicDataView.vue'
import EmotionDataView from '@/components/EmotionDataView.vue'
import HairDataView from '@/components/HairDataView.vue'
import ChocoboDataView from '@/components/ChocoboDataView.vue'
import FashionDataView from '@/components/FashionDataView.vue'
import PortraitDataView from '@/components/PortraitDataView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/mini',
    name: 'mini',
    component: MinDataiView
  },
  {
    path: '/ride',
    name: 'ride',
    component: RideDataView
  },
  {
    path: '/music',
    name: 'music',
    component: MusicDataView
  },
  {
    path: '/emotion',
    name: 'emotion',
    component: EmotionDataView
  },
  {
    path: '/hair',
    name: 'hair',
    component: HairDataView
  },
  {
    path: '/chocobo',
    name: 'chocobo',
    component: ChocoboDataView
  },
  {
    path: '/fashion',
    name: 'fashion',
    component: FashionDataView
  },
  {
    path: '/portrait',
    name: 'portrait',
    component: PortraitDataView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
