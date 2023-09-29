<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
    router.go(-1);
};
</script>

<template>
    <div>
        <div class="top-menu">
            <div class="top-menu-arrow">
                <span class="arrow" @click="goBack">&larr;</span>
            </div>
            <NH3>Войти</NH3>
        </div>
        <RouterView />
    </div>
</template>

<style scoped>
.top-menu {
    padding: 8px 16px 24px;
    margin: -16px -16px 0;

    background-color: #fef7ff;
}

.top-menu-arrow {
    display: flex;

    align-items: center;

    height: 48px;
}

.arrow {
    cursor: pointer;
}
</style>
