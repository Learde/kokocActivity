<script setup>
import { useRouter, useRoute } from "vue-router";

import { isNil } from "@/shared";

const router = useRouter();
const route = useRoute();

const goBack = () => {
    router.go(-1);
};
</script>

<template>
    <div class="auth-template">
        <div
            class="top-menu"
            :class="{ 'top-menu-bgc': !route.meta.noBackground }"
        >
            <div class="top-menu-arrow">
                <span class="arrow" @click="goBack">&larr;</span>
            </div>
            <NH3 v-if="route.meta.title">{{ route.meta.title }}</NH3>
        </div>
        <div class="content">
            <RouterView />
        </div>
        <div v-if="!isNil(route.meta.step)" class="steps">
            <div
                class="step"
                :class="{ active: Number(route.meta.step) === 1 }"
            ></div>
            <div
                class="step"
                :class="{ active: Number(route.meta.step) === 2 }"
            ></div>
            <div
                class="step"
                :class="{ active: Number(route.meta.step) === 3 }"
            ></div>
        </div>
    </div>
</template>

<style scoped>
.auth-template {
    display: flex;

    flex-direction: column;

    height: 100%;
}

.top-menu {
    padding: 8px 16px 24px;
    margin: -16px -16px 0;
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

.steps {
    display: flex;

    gap: 4px;

    align-items: center;
    justify-content: center;

    padding: 8px 0 4px;
}

.step {
    display: block;

    width: 8px;
    height: 8px;

    background-color: #9b9b9b;
    border-radius: 10px;
}

.step.active {
    background-color: #000;
}
</style>
