import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "@/modules";
import { routes, authRouteNames } from "@/pages";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach(async (to) => {
    const authStore = useAuthStore();

    if (!authStore.isAuthenticated && !authRouteNames.includes(to.name)) {
        return { name: "Welcome" };
    }
});

export default router;
