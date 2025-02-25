import { createRouter, createWebHistory } from "vue-router";
import Signup from "@/views/auth/Signup.vue";
import Login from "@/views/auth/Login.vue";
import ForgotPassword from "@/views/auth/ForgotPassword.vue";

const routes = [
    { path: "/", redirect: "/SignIn" },
    { path: "/SignUp", component: Signup },
    { path: "/SignIn", component: Login },
    { path: "/ForgotPassword", component: ForgotPassword },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;