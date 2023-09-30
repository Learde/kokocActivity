<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (name) => {
    router.push({ name });
};
</script>

<template>
    <div class="footer-menu">
        <div class="block" @click="goTo('summary')">Сводка</div>
        <div class="block" @click="goTo('practices')">Курсы</div>
        <div class="block" @click="goTo('shop')">Магазин</div>
    </div>
</template>

<style lang="scss" scoped>
.footer-menu {
    position: fixed;
    bottom: 0;

    z-index: 999999999;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr;

    width: 100%;
    height: 80px;

    background: var(--m-3-sys-light-surface-container, #f3edf7);

    .block {
        display: flex;

        flex-direction: column;

        align-items: center;
        justify-content: center;

        cursor: pointer;
    }
}
</style>
