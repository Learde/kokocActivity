<script setup></script>

<template>
    <div class="welcome-page">
        <h1>Тренируйтесь и помогайте</h1>
        <span>Фитнес, меняющий мир</span>
        <RouterLink class="button-link" :to="{ name: 'Registration' }">
            <NButton type="primary"> Зарегистрироваться </NButton>
        </RouterLink>
        <span>
            Уже зарегистрированы?
            <RouterLink :to="{ name: 'Login' }">Войти</RouterLink>
        </span>
    </div>
</template>

<style scoped lang="scss">
.welcome-page {
    display: flex;

    flex-direction: column;

    align-items: center;

    height: 100%;
    padding: 30px 0;

    & h1 {
        margin-bottom: 5px;
    }

    & span {
        color: #808080;
    }

    & a {
        text-decoration: none;
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
</style>
