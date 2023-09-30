<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const goBack = () => {
    router.go(-1);
};
</script>

<template>
    <div class="back-template">
        <div
            class="top-menu"
            :class="{
                'top-menu-bgc': !route.meta.noBackground,
                'top-menu-column': route.meta.isDirectionColumn,
            }"
        >
            <div class="top-menu-arrow">
                <span class="arrow" @click="goBack">&larr;</span>
            </div>
            <NH3 v-if="route.meta.title">{{ route.meta.title }}</NH3>
        </div>
        <div class="content">
            <RouterView />
        </div>
        <slot name="footer" />
    </div>
</template>

<style scoped>
.back-template {
    display: flex;

    flex-direction: column;

    height: 100%;
}

.top-menu {
    display: flex;

    gap: 20px;

    align-items: center;

    padding: 8px 16px;
    margin: -16px -16px 0;
}

.top-menu-column {
    flex-direction: column;

    gap: 0;

    align-items: flex-start;

    padding-bottom: 24px;
}

.top-menu-bgc {
    background-color: #fef7ff;
}

.top-menu-arrow {
    display: flex;

    align-items: center;

    height: 48px;

    font-size: 20px;
}

.arrow {
    cursor: pointer;
}

.content {
    height: 100%;
}
</style>
