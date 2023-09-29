<script setup></script>

<template>
    <NForm class="login-form">
        <NFormItem label="Никнейм">
            <NInput placeholder="Введите никнейм" />
        </NFormItem>
        <NFormItem label="Пароль">
            <NInput placeholder="Введите пароль" type="password" />
        </NFormItem>
        <NButton type="primary">Войти</NButton>
    </NForm>
</template>

<style scoped lang="scss">
.login-form {
    height: 100%;
}
</style>
