import { defineStore } from "pinia";
import { ref } from "vue";

import { getTrainings as apiGetTrainings } from "@/shared";

export const useTrainingsStore = defineStore("exercises", () => {
    const trainings = ref([]);
    const isLoading = ref(false);

    async function getTrainings() {
        isLoading.value = true;

        trainings.value = await apiGetTrainings();

        isLoading.value = false;
    }

    return { trainings, isLoading, getTrainings };
});
