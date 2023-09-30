import { useCookies } from "@vueuse/integrations/useCookies";
import { defineStore } from "pinia";
import { computed } from "vue";

import { isNil } from "@/shared";

export const useAuthStore = defineStore("auth", () => {
    const cookies = useCookies(["jwt"]);

    const isAuthenticated = computed(() => {
        return !isNil(cookies.get("jwt"));
    });

    function setToken(value) {
        cookies.set("jwt", value, { maxAge: 60 * 60 * 24 });
    }

    return { isAuthenticated, setToken };
});
