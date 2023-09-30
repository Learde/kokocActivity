<script setup></script>

<template>
    <div class="footer-menu">
        <div class="block">Кнопка</div>
        <div class="block">Кнопка</div>
        <div class="block">Кнопка</div>
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
    }
}
</style>
