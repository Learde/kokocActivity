<script setup>
defineProps({
    hasFooter: {
        type: Boolean,
        default: true,
    },
});
</script>

<template>
    <main class="main" :class="{ 'main-pb': hasFooter }">
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
    height: calc(var(--vh, 1vh) * 100);
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);

    background: var(--c-foreground);
}

.main-pb {
    padding-bottom: 80px;
}

.content {
    width: 100%;
    height: 100%;
    padding: 16px;
    overflow: auto;
}
</style>
