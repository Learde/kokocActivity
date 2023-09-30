import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const role = ref(null);

    function setRole(value) {
        role.value = String(value).toLowerCase();
    }

    return { role, setRole };
});
