<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

import { useRegistrationStore } from "./useRegistrationStore";

const registrationStore = useRegistrationStore();
const finishRegistration = () => {
    registrationStore.applyToken();
    router.push({ name: "summary" });
};
</script>

<template>
    <div class="registration-finish">
        <div class="finish-icon">🎉</div>

        <NH2>Здравствуйте, герой здоровья и добра!</NH2>

        <NText class="finish-text">
            Вы сделали правильный выбор, присоединившись к нам! Теперь ваша
            физическая активность будет иметь больше смысла, ведь Ваш каждый шаг
            будет оставлять след в мире добрых дел.
        </NText>

        <NButton
            class="finish-button"
            type="primary"
            block
            @click="finishRegistration"
        >
            Приступить к тренировкам
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
