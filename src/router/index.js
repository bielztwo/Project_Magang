import { createRouter, createWebHistory } from 'vue-router';
import Graph from '../components/HelloWorld.vue';
import About from '../components/About.vue';
import Table from '../components/Table.vue';
import Setting from '../components/Setting.vue';
import Recording from '../components/Recording.vue';
import Home from '../components/Home.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/graph',
            name: 'Dashboard',
            component: Graph
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/table',
            name: 'Table',
            component: Table
        },
        {
            path: '/recording',
            name: 'Recording',
            component: Recording
        },
        {
            path: '/setting',
            name: 'Setting',
            component: Setting
        }
    ]
})
export default router