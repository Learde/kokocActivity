<script setup></script>

<template>
    <div :class="classes.main"></div>
</template>

<style module="classes" lang="scss">
.main {
    display: flex;

    flex-direction: column;

    align-items: center;

    min-height: calc(100vh - var(--header-height));

    padding: 20px 0;
}
</style>
