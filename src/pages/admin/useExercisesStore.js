import { defineStore } from "pinia";
import { ref } from "vue";

import { getExercises as apiGetExercises } from "@/shared";

export const useExercisesStore = defineStore("exercises", () => {
    const exercises = ref([]);
    const isLoading = ref(false);

    async function getExercises() {
        isLoading.value = true;

        exercises.value = await apiGetExercises();

        isLoading.value = false;
    }

    return { exercises, isLoading, getExercises };
});
