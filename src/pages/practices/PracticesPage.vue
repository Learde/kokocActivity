<script setup>
import { ref } from "vue";

import { TheCard } from "@/modules";

const tags = [
    {
        id: "yoga",
        name: "Йога",
    },
    {
        id: "kardio",
        name: "Кардио",
    },
    {
        id: "strong",
        name: "Силовые",
    },
];

const checked = ref("yoga");

const updateTag = (val) => {
    console.log(val);
    checked.value = val;
};
</script>

<template>
    <div class="prictices">
        <div class="main-title roboto-flex">
            Тренировки, которые пользуются популярностью
        </div>
        <div class="popular-cards">
            <TheCard />
        </div>
        <div class="main-title tags-title roboto-flex">
            Найдите занятие по душе!
        </div>
        <div class="tags">
            <NTag
                v-for="tag in tags"
                :key="tag.id"
                :checked="tag.id === checked.value"
                checkable
                type="primary"
                @click="updateTag(tag.id)"
            >
                {{ tag.name }}
            </NTag>
        </div>
        <div class="all-cards">
            <TheCard small />
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

.popular-cards {
    display: flex;

    padding: 10px 0;

    overflow: auto;
}

.main-title {
    /* Title/H3 */
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%; /* 24px */
    color: #000;
}

.tags-title {
    margin-top: 24px;
}

.tags {
    margin-top: 10px;
}
</style>
