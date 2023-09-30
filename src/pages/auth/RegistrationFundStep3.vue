<script setup>
import { useRouter } from "vue-router";

import { useAuthStore } from "@/modules";

const router = useRouter();
const authStore = useAuthStore();

const finishRegistration = () => {
    authStore.setToken("123123");
    router.push({ name: "summary" });
};
</script>

<template>
    <div class="registration-finish">
        <div class="finish-icon">🎉</div>

        <NH2>Здравствуйте, администратор фонда!</NH2>

        <NText class="finish-text">
            Вы можете смотреть статистику фонда.
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
