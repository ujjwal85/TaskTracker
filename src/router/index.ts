import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        component: () => import('../layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: Home,
                meta: { title: 'Dashboard' }
            },
            // Add more routes here
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router