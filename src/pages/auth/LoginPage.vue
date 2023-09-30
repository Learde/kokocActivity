<script setup>
import { ref, computed, watch } from "vue";

import { getEmailValidationFeedback, getEmailValidationStatus } from "./lib";

const email = ref("");
const password = ref("");
const wasSent = ref(false);

const inputValidationStatus = computed(() => {
    return wasSent.value ? getEmailValidationStatus(email.value) : undefined;
});
const inputFeedback = computed(() => {
    return wasSent.value ? getEmailValidationFeedback(email.value) : "";
});

const authData = computed(() => {
    return {
        email: email.value,
        password: password.value,
    };
});

watch(authData, () => (wasSent.value = false));

const login = () => {
    wasSent.value = true;
};
</script>

<template>
    <NForm class="login-form">
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
        <NButton block type="primary" @click="login">Войти</NButton>
        <div class="login-form-restore">
            <RouterLink :to="{ name: 'Login' }" #="{ navigate, href }" custom>
                <NA :href="href" @click="navigate"> Забыли пароль? </NA>
            </RouterLink>
        </div>
    </NForm>
</template>

<style scoped lang="scss">
.login-form {
    height: 100%;
}

.login-form-restore {
    margin-top: 14px;

    text-align: center;
}
</style>
