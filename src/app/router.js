import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "@/modules";
import { routes } from "@/pages";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

router.beforeEach(async (to) => {
    const authStore = useAuthStore();

    if (!authStore.isAuthenticated && to.name !== "Welcome") {
        return { name: "Welcome" };
    }
});

export default router;
