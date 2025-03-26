import { RouteNames } from "../global/constants/RouteNames.ts";

export default [
    {
        path: '',
        name: RouteNames.First,
        component: () => import('../views/FirstPage.vue'),
    },
    {
        path: 'second',
        name: RouteNames.Second,
        component: () => import('../views/SecondPage.vue'),
    },
    {
        path: 'third',
        name: RouteNames.Third,
        component: () => import('../views/ThirdPage.vue'),
    },
]