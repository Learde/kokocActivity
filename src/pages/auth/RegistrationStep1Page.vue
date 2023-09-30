<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { getEmailValidationFeedback, getEmailValidationStatus } from "./lib";

const fio = ref("");
const email = ref("");
const password = ref("");

const inputValidationStatus = computed(() => {
    return email.value ? getEmailValidationStatus(email.value) : undefined;
});
const inputFeedback = computed(() => {
    return email.value ? getEmailValidationFeedback(email.value) : "";
});

const router = useRouter();

const nextStep = () => {
    router.push({ name: "RegistrationStep2" });
};
</script>

<template>
    <NForm class="registration-form">
        <NFormItem label="ФИО">
            <NInput placeholder="Введите ФИО" v-model:value="fio" />
        </NFormItem>
        <NFormItem
            label="Email"
            :validation-status="inputValidationStatus"
            :feedback="inputFeedback"
        >
            <NInput placeholder="Введите почту" v-model:value="email" />
        </NFormItem>
        <NFormItem label="Пароль">
            <NInput
                placeholder="Введите пароль"
                type="password"
                v-model:value="password"
            />
        </NFormItem>
        <NText class="info" depth="2">
            Эти данные позволят вам легко входить в приложение и сохранять свой
            прогресс. Спасибо за регистрацию и присоединение к нашему
            фитнес-сообществу!
        </NText>
        <NButton
            class="registration-button"
            type="primary"
            block
            @click="nextStep"
        >
            Продолжить
        </NButton>
    </NForm>
</template>

<style scoped lang="scss">
.registration-form {
    display: flex;

    flex-direction: column;

    height: 100%;
    padding-top: 20px;
}

.registration-button {
    margin-top: auto;
}

.info {
    font-size: 12px;
    line-height: 16px;
}
</style>
