import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PurchaseView from "../views/PurchaseView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          component: HomeView
        },
        {
          path: '/account',
          component: LoginView
        },
        {path:'/purchase',
         component: PurchaseView
        }
    ],
});

export default router;