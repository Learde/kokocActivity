import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegistrationStore = defineStore("registrationStore", () => {
    const fio = ref("");
    const password = ref("");
    const description = ref("");
    const selectedDepartment = ref(null);
    const email = ref("");
    const weight = ref(null);
    const height = ref(null);
    const gender = ref(null);

    function clear() {
        fio.value = "";
        password.value = "";
        description.value = "";
        selectedDepartment.value = null;
        email.value = "";
        weight.value = null;
        height.value = null;
        gender.value = null;
    }

    return {
        fio,
        password,
        description,
        selectedDepartment,
        email,
        weight,
        height,
        gender,
        clear,
    };
});
