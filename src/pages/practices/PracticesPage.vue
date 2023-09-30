<script setup>
import { ref, onMounted } from "vue";

import { PracticeCard, usePracticeStore } from "@/components";

const store = usePracticeStore();

// const loading = ref(true);

onMounted(() => {
    store.fetchPractices();
    console.log(store.practices);
});

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
            <PracticeCard />
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
                :class="{ 'n-tag--active': tag.id === checked }"
                @click="updateTag(tag.id)"
            >
                {{ tag.name }}
            </NTag>
        </div>
        <div class="all-cards">
            <PracticeCard small />
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
    display: flex;

    gap: 10px;

    margin-top: 16px;

    .n-tag--active {
        color: var(--m-3-sys-light-on-secondary-container, #1d192b) !important;

        background: var(
            --m-3-sys-light-secondary-container,
            #e8def8
        ) !important;
    }
}
</style>
