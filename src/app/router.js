import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "@/modules";
import { routes } from "@/pages";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach(async (to) => {
    const authStore = useAuthStore();
    const authRoutes = ["Welcome", "Login", "RegistrationStep1"];

    if (!authStore.isAuthenticated && !authRoutes.includes(to.name)) {
        return { name: "Welcome" };
    }
});

export default router;
