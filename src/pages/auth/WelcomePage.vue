<script setup></script>

<template>
    <div class="welcome-page">
        <NH1 class="roboto-flex">Тренируйтесь и помогайте</NH1>
        <NText depth="2" class="welcome-text">Фитнес, меняющий мир</NText>
        <RouterLink class="button-link" :to="{ name: 'Registration' }">
            <NButton type="primary"> Зарегистрироваться </NButton>
        </RouterLink>
        <NText depth="2">
            Уже зарегистрированы?
            <RouterLink :to="{ name: 'Login' }" #="{ navigate, href }" custom>
                <NA :href="href" @click="navigate"> Войти </NA>
            </RouterLink>
        </NText>
    </div>
</template>

<style scoped lang="scss">
.welcome-page {
    display: flex;

    flex-direction: column;

    align-items: center;

    height: 100%;
    padding: 32px 0;

    & h1 {
        margin-bottom: 5px;

        text-align: center;
    }
}

.button-link {
    width: 100%;

    margin-top: auto;
    margin-bottom: 16px;

    & > button {
        width: 100%;
    }
}

.welcome-text {
    font-size: 16px;
}
</style>
