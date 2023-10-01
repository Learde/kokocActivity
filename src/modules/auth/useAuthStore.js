import { useCookies } from "@vueuse/integrations/useCookies";
import { defineStore } from "pinia";
import { computed, onMounted } from "vue";

import { isNil, setToken as apiSetToken } from "@/shared";

export const useAuthStore = defineStore("auth", () => {
    const cookies = useCookies(["jwt"]);

    const token = computed(() => {
        return cookies.get("jwt");
    });

    const isAuthenticated = computed(() => {
        return !isNil(cookies.get("jwt"));
    });

    function setToken(value) {
        cookies.set("jwt", value, { maxAge: 60 * 60 * 24 });
        apiSetToken(value);
    }

    function removeToken() {
        cookies.set("jwt", null, { maxAge: 0 });
        apiSetToken(null);
    }

    onMounted(() => {
        apiSetToken(token.value);
    });

    return { isAuthenticated, setToken, removeToken };
});
