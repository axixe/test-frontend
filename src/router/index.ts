import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from "../layouts/DefaultLayout.vue";
import commonRoutes from "./commonRoutes.ts";

const router = createRouter({
    history: createWebHistory('/test-frontend/'),
    routes: [
        {
            path: '',
            component: DefaultLayout,
            children: [ ...commonRoutes ],
        }
    ]
})

export default router