import { defineStore } from "pinia";
import { ref } from "vue";

import { getPractices, getPractice, confirmPractice } from "@/shared";

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

    async function confirm(id, fund, days) {
        loading.value = true;
        const data = await confirmPractice({
            courseId: id,
            fundId: fund,
            days,
        });

        console.log(data);
        practices.value = data;
        loading.value = false;
    }

    return { loading, practices, fetchPractices, practiceById, confirm };
});
