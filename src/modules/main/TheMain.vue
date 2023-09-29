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

    align-items: center;
    justify-content: center;

    min-height: 100vh;

    background: var(--c-background);
}

.content {
    padding: 10px;
}
</style>
