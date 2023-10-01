import { defineStore } from "pinia";
import { ref } from "vue";

import { getRating } from "@/shared";

export const useRatingStore = defineStore("ratingStore", () => {
    const rating = ref([]);
    const loading = ref(true);

    async function fetchRating(type) {
        loading.value = true;
        const data = await getRating(type);

        console.log(data);
        rating.value = data;
        loading.value = false;
    }

    return {
        loading,
        rating,
        fetchRating,
    };
});
