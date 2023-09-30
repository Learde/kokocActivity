import { useCookies } from "@vueuse/integrations/useCookies";
import { defineStore } from "pinia";
import { computed } from "vue";

export const useUserStore = defineStore("user", () => {
    const cookies = useCookies(["role"]);

    const role = computed(() => {
        return cookies.get("role");
    });

    function setRole(value) {
        cookies.set("role", String(value).toLowerCase(), {
            maxAge: 60 * 60 * 24,
        });
    }

    return { role, setRole };
});
