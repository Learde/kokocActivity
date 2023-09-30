import { defineStore } from "pinia";
import { ref } from "vue";

import { useAuthStore } from "@/modules";
import {
    registerUser as apiRegisterUser,
    registerAdmin as apiRegisterAdmin,
    registerFund as apiRegisterFund,
    registerDepartment as apiRegisterDepartment,
} from "@/shared";

export const useRegistrationStore = defineStore("registrationStore", () => {
    const fio = ref("");
    const password = ref("");
    const description = ref("");
    const selectedDepartment = ref(null);
    const email = ref("");
    const weight = ref(null);
    const height = ref(null);
    const gender = ref(null);

    const isLoading = ref(false);
    const token = ref(null);

    const authStore = useAuthStore();

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

    async function registerUser() {
        isLoading.value = true;
        token.value = await apiRegisterUser({
            fio: fio.value,
            email: email.value,
            password: password.value,
            weight: weight.value,
            height: height.value,
            gender: gender.value,
            department: selectedDepartment.value,
        });
        isLoading.value = false;
    }

    async function registerAdmin() {
        isLoading.value = true;
        token.value = await apiRegisterAdmin({
            fio: fio.value,
            email: email.value,
            password: password.value,
        });
        isLoading.value = false;
    }

    async function registerFund() {
        isLoading.value = true;
        token.value = await apiRegisterFund({
            fio: fio.value,
            email: email.value,
            password: password.value,
            description: description.value,
        });
        isLoading.value = false;
    }

    async function registerDepartment() {
        isLoading.value = true;
        token.value = await apiRegisterDepartment({
            fio: fio.value,
            email: email.value,
            password: password.value,
            description: description.value,
        });
        isLoading.value = false;
    }

    function applyToken() {
        authStore.setToken(token.value);
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
        isLoading,
        registerUser,
        registerAdmin,
        registerDepartment,
        registerFund,
        applyToken,
        clear,
    };
});
