<script setup>
import { useRouter } from "vue-router";

import { useUserStore } from "@/modules";

import { useRegistrationStore } from "./useRegistrationStore";

const userStore = useUserStore();
const registrationStore = useRegistrationStore();

const router = useRouter();

const finishRegistration = () => {
    registrationStore.applyToken();
    userStore.setRole("admin");
    router.push({ name: "AdminPractices" });
};
</script>

<template>
    <div class="registration-finish">
        <div class="finish-icon">🎉</div>

        <NH2>Здравствуйте, администратор!</NH2>

        <NText class="finish-text">
            Вы можете добавить курсы и смотреть статистику по всем пользователям
            приложения.
        </NText>

        <NButton
            class="finish-button"
            type="primary"
            block
            @click="finishRegistration"
        >
            Приступить к администрированию
        </NButton>
    </div>
</template>

<style scoped lang="scss">
.registration-finish {
    display: flex;

    flex-direction: column;

    height: 100%;
}

.finish-button {
    margin-top: auto;
    margin-bottom: 8px;
}

.finish-icon {
    margin-bottom: 32px;

    font-size: 108px;
    text-align: center;
}

.finish-text {
    margin-top: 12px;

    font-size: 16px;
    line-height: 24px;
}

.grid-2 {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 12px;
}
</style>
