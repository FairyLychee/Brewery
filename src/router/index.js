import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue'
import BrreweryPage from "@/views/BreweryPage.vue"
let router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomePage
        },
        {
            path: "/BreweryPage",
            component: BrreweryPage
        }
    ]

})

export default router;