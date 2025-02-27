import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/auth/Login.vue";
import Signup from "@/views/auth/Signup.vue";
import ForgotPassword from "@/views/auth/ForgotPassword.vue";
import Dashboard from "@/views/Dashboard.vue";
import MainLayout from "@/layouts/MainLayout.vue";

const isAuthenticated = () => !!localStorage.getItem("authToken");

const routes = [
    { path: "/", redirect: "/Dashboard" },
    { path: "/SignUp", component: Signup },
    { path: "/SignIn", component: Login },
    { path: "/ForgotPassword", component: ForgotPassword },
    {
        path: "/dashboard",
        component: MainLayout,
        meta: { requiresAuth: true },
        children: [
            { path: "", component: Dashboard }
        ]
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next("/SignIn");
    } else if ((to.path === "/SignIn" || to.path === "/SignUp") && isAuthenticated()) {
        next("/dashboard");
    } else {
        next();
    }
});

export default router;