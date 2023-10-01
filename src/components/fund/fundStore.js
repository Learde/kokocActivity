import { defineStore } from "pinia";
import { ref } from "vue";

import { getFundes } from "@/shared";

export const useFundStore = defineStore("fundStore", () => {
    const fundes = ref([]);
    const loading = ref(true);

    async function fetchFundes() {
        loading.value = true;
        const data = await getFundes();

        console.log(data);
        fundes.value = data;
        loading.value = false;
    }

    // async function practiceById(id) {
    //     loading.value = true;
    //     const data = await getPractice(id);

    //     loading.value = false;

    //     return data;
    // }

    return { loading, fundes, fetchFundes };
});
