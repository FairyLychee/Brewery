import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue'
import BrreweryPage from "@/views/BreweryPage.vue"
import BreweryDetail from "@/views/BreweryDetail.vue"
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
        },
        {
            path: "/BreweryDetail/:id",
            name: "BreweryDetail",
            component: BreweryDetail
        }
    ]

})

export default router;