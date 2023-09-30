<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

import { useAuthStore } from "@/modules";
import { login } from "@/shared";

import { getEmailValidationFeedback, getEmailValidationStatus } from "./lib";

const authStore = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const isLoading = ref(false);

const inputValidationStatus = computed(() => {
    return email.value ? getEmailValidationStatus(email.value) : undefined;
});
const inputFeedback = computed(() => {
    return email.value ? getEmailValidationFeedback(email.value) : "";
});

const authData = computed(() => {
    return {
        email: email.value,
        password: password.value,
    };
});

const isLoginDisabled = computed(() => {
    return !(
        password.value &&
        password.value.length > 0 &&
        email.value &&
        getEmailValidationStatus(email.value) === undefined
    );
});

const doLogin = async () => {
    isLoading.value = true;
    const { token, role } = await login(authData.value);

    authStore.setToken(token);

    if (role === "user") {
        router.push({ name: "summary" });
    }

    isLoading.value = false;
};
</script>

<template>
    <NSpin class="login-wrapper" :show="isLoading">
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
            <NButton
                block
                type="primary"
                @click="doLogin"
                :disabled="isLoginDisabled"
            >
                Войти
            </NButton>
            <div class="login-form-restore">
                <RouterLink
                    :to="{ name: 'Login' }"
                    #="{ navigate, href }"
                    custom
                >
                    <NA :href="href" @click="navigate"> Забыли пароль? </NA>
                </RouterLink>
            </div>
        </NForm>
    </NSpin>
</template>

<style scoped lang="scss">
.login-wrapper {
    height: 100%;
}

.login-form {
    height: 100%;
}

.login-form-restore {
    margin-top: 14px;

    text-align: center;
}
</style>
