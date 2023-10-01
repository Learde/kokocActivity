import { defineStore } from "pinia";
import { ref } from "vue";

import { getPractices, getPractice } from "@/shared";

export const usePracticeStore = defineStore("practiceStore", () => {
    const practices = ref([]);
    const loading = ref(true);

    async function fetchPractices() {
        loading.value = true;
        const data = await getPractices();

        console.log(data);
        practices.value = data;
        loading.value = false;
    }

    async function practiceById(id) {
        loading.value = true;
        const data = await getPractice(id);

        loading.value = false;

        return data;
    }

    return { loading, practices, fetchPractices, practiceById };
});
