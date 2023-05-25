import { createRouter, createWebHashHistory } from "vue-router";

import HomeFlower from "@/views/HomeFlower.vue";
import LoginFlower from "@/views/LoginFlower.vue";
import ShopFlower from "@/views/ShopFlower.vue";

const routes = [
    {
        name: 'HomeFlower',
        path: '/',
        component: HomeFlower
    },
    {
        name: 'LoginFlower',
        path: '/login',
        component: LoginFlower
    },
    {
        name: 'ShopFlower',
        path: '/shop',
        component: ShopFlower
    },
    
];
const router = Router();

export default router;

function Router() {
    const router = new createRouter({
        history: createWebHashHistory(),
        routes,
    });
    return router;
}