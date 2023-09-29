<script setup></script>

<template>
    <div :class="classes.authPage">
        <NForm :class="classes.authForm">
            <NFormItem label="Никнейм">
                <NInput placeholder="Введите никнейм" />
            </NFormItem>
            <NFormItem label="ФИО">
                <NInput placeholder="Введите ФИО" />
            </NFormItem>
            <NFormItem label="Email">
                <NInput placeholder="Введите email" />
            </NFormItem>
            <NFormItem label="Пароль">
                <NInput placeholder="Введите пароль" type="password" />
            </NFormItem>
            <NButton type="primary">Зарегистрироваться</NButton>
        </NForm>
    </div>
</template>

<style lang="scss" module="classes">
.authPage {
    display: flex;

    justify-content: center;

    margin-top: 20px;
}

.authForm {
    display: flex;

    flex-direction: column;

    justify-content: center;

    width: 100%;
    max-width: 400px;

    & > * {
        width: 100%;
    }

    & > button {
        align-self: center;
    }
}
</style>
