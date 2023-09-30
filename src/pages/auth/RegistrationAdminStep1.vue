<script setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

import { getEmailValidationFeedback, getEmailValidationStatus } from "./lib";
import { useRegistrationStore } from "./useRegistrationStore";

const registrationStore = useRegistrationStore();
const { fio, email, password, isLoading } = storeToRefs(registrationStore);

const inputValidationStatus = computed(() => {
    return email.value ? getEmailValidationStatus(email.value) : undefined;
});
const inputFeedback = computed(() => {
    return email.value ? getEmailValidationFeedback(email.value) : "";
});

const router = useRouter();

const nextStep = async () => {
    await registrationStore.registerAdmin();
    router.push({ name: "RegistrationAdminStep2" });
};

const isRegistrationDisabled = computed(() => {
    return !(
        fio.value &&
        String(fio.value).length > 0 &&
        password.value &&
        password.value.length > 0 &&
        email.value &&
        getEmailValidationStatus(email.value) === undefined
    );
});
</script>

<template>
    <NSpin class="registration-wrapper" :show="isLoading">
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
                Эти данные позволят вам легко входить в приложение и сохранять
                свой прогресс. Спасибо за регистрацию и присоединение к нашему
                фитнес-сообществу!
            </NText>
            <NButton
                class="registration-button"
                type="primary"
                block
                :disabled="isRegistrationDisabled"
                @click="nextStep"
            >
                Продолжить
            </NButton>
        </NForm>
    </NSpin>
</template>

<style scoped lang="scss">
.registration-form {
    display: flex;

    flex-direction: column;

    height: 100%;
}

.registration-wrapper {
    height: 100%;
}

.registration-button {
    margin-top: auto;
}

.info {
    font-size: 12px;
    line-height: 16px;
}
</style>
