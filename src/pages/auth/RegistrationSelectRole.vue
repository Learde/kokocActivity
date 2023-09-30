<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const role = ref("user");

const roles = [
    {
        label: "Пользователь",
        value: "user",
    },
    {
        label: "Департамент",
        value: "department",
    },
    {
        label: "Фонд",
        value: "fund",
    },
    {
        label: "Администратор",
        value: "admin",
    },
];

const goToRegistration = () => {
    if (role.value === "user") {
        router.push({ name: "RegistrationUserStep1" });
    } else if (role.value === "admin") {
        router.push({ name: "RegistrationAdminStep1" });
    } else if (role.value === "fund") {
        router.push({ name: "RegistrationFundStep1" });
    } else if (role.value === "department") {
        router.push({ name: "RegistrationDepartmentStep1" });
    }
};
</script>

<template>
    <div class="select-role-page">
        <NSelect :options="roles" v-model:value="role" />
        <NButton
            class="select-role-btn"
            type="primary"
            block
            @click="goToRegistration"
        >
            Продолжить
        </NButton>
    </div>
</template>

<style scoped lang="scss">
.select-role-page {
    display: flex;

    flex-direction: column;

    height: 100%;
}

.select-role-btn {
    margin-top: auto;
}
</style>
