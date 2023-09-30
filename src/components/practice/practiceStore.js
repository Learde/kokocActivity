import { defineStore } from "pinia";
import { ref } from "vue";

import { getPractices } from "@/shared";

export const usePracticeStore = defineStore("practiceStore", () => {
    const practices = ref([]);
    const loading = ref(true);

    async function fetchPractices() {
        loading.value = true;
        const data = await getPractices();

        practices.value = data;
        loading.value = false;
    }

    return { loading, practices, fetchPractices };
});
