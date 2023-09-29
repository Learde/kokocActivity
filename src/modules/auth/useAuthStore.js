import { useCookies } from "@vueuse/integrations";
import { defineStore } from "pinia";
import { computed } from "vue";

import { isNil } from "@/shared";

export const useAuthStore = defineStore("auth", () => {
    const cookies = useCookies(["jwt"]);

    const isAuthenticated = computed(() => {
        return !isNil(cookies.get("jwt"));
    });

    return { isAuthenticated };
});
