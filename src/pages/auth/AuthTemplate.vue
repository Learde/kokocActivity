<script setup>
import { useRoute } from "vue-router";

import { BackTemplate } from "@/components";
import { isNil } from "@/shared";

const route = useRoute();
</script>

<template>
    <BackTemplate>
        <template #footer>
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
        </template>
    </BackTemplate>
</template>

<style scoped>
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
