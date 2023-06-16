import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HelloWorld.vue';
import About from '../components/About.vue';
import Table from '../components/Table.vue';
import Setting from '../components/Setting.vue';
import Recording from '../components/Recording.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Dashboard',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/Table',
            name: 'Table',
            component: Table
        },
        {
            path: '/Recording',
            name: 'Recording',
            component: Recording
        },
        {
            path: '/Setting',
            name: 'Setting',
            component: Setting
        }
    ]
})
export default router