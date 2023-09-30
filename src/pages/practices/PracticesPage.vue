<script setup>
import { ref } from "vue";

import { BackTemplate, ListCard } from "@/components";

const checked = ref(false);
const checked1 = ref(false);
const checked2 = ref(false);
</script>

<template>
    <div class="prictices">
        <BackTemplate title="Курсы" :showBack="false" noBackground />
        <div class="tags">
            <NTag v-model:checked="checked" checkable> Йога </NTag>
            <NTag v-model:checked="checked1" checkable> Кардио </NTag>
            <NTag v-model:checked="checked2" checkable> Силовые </NTag>
        </div>
        <div class="cards">
            <ListCard class="card">
                <template #title>
                    <span class="card-title roboto-flex"
                        >Гармония тела и души</span
                    >
                </template>
                <template #tag>
                    <NTag checked checkable> Йога </NTag>
                </template>
                <template #content> xdd </template>
            </ListCard>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.n-tag {
    height: 32px;
    margin-right: 8px;

    border: 1px solid var(--m-3-sys-light-outline, #79747e);
    border-radius: 8px;
}

.card {
    margin-top: 16px;

    .header {
        display: flex;

        align-items: center;
        justify-content: space-between;

        width: 100%;

        .card-title {
            /* Title/H4 */
            font-size: 16px;
            font-style: normal;
            font-weight: 800;
            line-height: 120%; /* 19.2px */
            color: var(--m-3-sys-light-on-surface, #1d1b20);
        }
    }
}
</style>
