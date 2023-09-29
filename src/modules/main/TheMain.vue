<script setup></script>

<template>
    <main class="main">
        <div class="content">
            <slot />
        </div>
    </main>
</template>

<style scoped lang="scss">
.main {
    position: relative;
    z-index: var(--z-main);

    display: flex;

    align-items: baseline;
    justify-content: center;

    height: 100vh;
    min-height: 100vh;
    padding: 0;

    background: var(--c-background);
}

.content {
    width: 100%;
    height: 100%;
    padding: 16px;
}
</style>
