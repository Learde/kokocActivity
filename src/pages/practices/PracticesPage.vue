<script setup>
import { ref } from "vue";

import { ListCard } from "@/components";

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
            <ListCard class="card">
                <template #title>
                    <span class="card-title roboto-flex"
                        >Гармония тела и души</span
                    >
                </template>
                <template #tag>
                    <NTag checked checkable> Йога </NTag>
                </template>
                <template #content>
                    <img src="/src/shared/images/yoga.png" />
                </template>
                <template #footer>
                    <div class="footer-item">
                        <span class="title"> ⌛ Длительность </span>
                        <span class="value"> 2 недели </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🔥 Активность </span>
                        <span class="value"> 2500 Ккал </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 💸 Купюры </span>
                        <span class="value"> 200 шт. </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🪙 Монеты </span>
                        <span class="value"> 20 шт. </span>
                    </div>
                </template>
            </ListCard>
            <ListCard class="card">
                <template #title>
                    <span class="card-title roboto-flex"
                        >Гармония тела и души</span
                    >
                </template>
                <template #tag>
                    <NTag checked checkable> Йога </NTag>
                </template>
                <template #content>
                    <img src="/src/shared/images/yoga.png" />
                </template>
                <template #footer>
                    <div class="footer-item">
                        <span class="title"> ⌛ Длительность </span>
                        <span class="value"> 2 недели </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🔥 Активность </span>
                        <span class="value"> 2500 Ккал </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 💸 Купюры </span>
                        <span class="value"> 200 шт. </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🪙 Монеты </span>
                        <span class="value"> 20 шт. </span>
                    </div>
                </template>
            </ListCard>
            <ListCard class="card">
                <template #title>
                    <span class="card-title roboto-flex"
                        >Гармония тела и души</span
                    >
                </template>
                <template #tag>
                    <NTag checked checkable> Йога </NTag>
                </template>
                <template #content>
                    <img src="/src/shared/images/yoga.png" />
                </template>
                <template #footer>
                    <div class="footer-item">
                        <span class="title"> ⌛ Длительность </span>
                        <span class="value"> 2 недели </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🔥 Активность </span>
                        <span class="value"> 2500 Ккал </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 💸 Купюры </span>
                        <span class="value"> 200 шт. </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🪙 Монеты </span>
                        <span class="value"> 20 шт. </span>
                    </div>
                </template>
            </ListCard>
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
            <ListCard class="card">
                <template #title>
                    <div class="name">
                        <img
                            class="mini-img"
                            src="/src/shared/images/yoga.png"
                        />
                        <span class="card-title roboto-flex"
                            >Гармония тела и души</span
                        >
                    </div>
                </template>
                <template #tag>
                    <NTag checked checkable> Йога </NTag>
                </template>
                <template #footer>
                    <div class="footer-item">
                        <span class="title"> ⌛ Длительность </span>
                        <span class="value"> 2 недели </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🔥 Активность </span>
                        <span class="value"> 2500 Ккал </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 💸 Купюры </span>
                        <span class="value"> 200 шт. </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🪙 Монеты </span>
                        <span class="value"> 20 шт. </span>
                    </div>
                </template>
            </ListCard>
            <ListCard class="card">
                <template #title>
                    <div class="name">
                        <img
                            class="mini-img"
                            src="/src/shared/images/yoga.png"
                        />
                        <span class="card-title roboto-flex"
                            >Гармония тела и души</span
                        >
                    </div>
                </template>
                <template #tag>
                    <NTag checked checkable> Йога </NTag>
                </template>
                <template #footer>
                    <div class="footer-item">
                        <span class="title"> ⌛ Длительность </span>
                        <span class="value"> 2 недели </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🔥 Активность </span>
                        <span class="value"> 2500 Ккал </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 💸 Купюры </span>
                        <span class="value"> 200 шт. </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🪙 Монеты </span>
                        <span class="value"> 20 шт. </span>
                    </div>
                </template>
            </ListCard>
            <ListCard class="card">
                <template #title>
                    <div class="name">
                        <img
                            class="mini-img"
                            src="/src/shared/images/yoga.png"
                        />
                        <span class="card-title roboto-flex"
                            >Гармония тела и души</span
                        >
                    </div>
                </template>
                <template #tag>
                    <NTag checked checkable> Йога </NTag>
                </template>
                <template #footer>
                    <div class="footer-item">
                        <span class="title"> ⌛ Длительность </span>
                        <span class="value"> 2 недели </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🔥 Активность </span>
                        <span class="value"> 2500 Ккал </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 💸 Купюры </span>
                        <span class="value"> 200 шт. </span>
                    </div>
                    <div class="footer-item">
                        <span class="title"> 🪙 Монеты </span>
                        <span class="value"> 20 шт. </span>
                    </div>
                </template>
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

.popular-cards {
    display: flex;

    padding: 10px 0;

    overflow: auto;
}

.card {
    min-width: 280px;
    margin-top: 16px;
    margin-right: 15px;

    border: 2px solid var(--m-3-sys-light-primary, #6750a4);

    .name {
        display: flex;

        gap: 10px;

        align-items: center;
    }

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

    .n-tag {
        margin-right: 0;

        /* M3/label/large */
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */

        color: var(--m-3-sys-light-on-secondary-container, #1d192b);
        text-align: center;
        letter-spacing: 0.1px;

        background: var(--m-3-sys-light-secondary-container, #e8def8);
        border: none;
        border-radius: 5px;
    }

    img {
        width: 100%;

        border-radius: 10px;
    }

    .mini-img {
        width: 35px !important;
        height: 35px !important;

        border-radius: 5px !important;
    }

    .footer-item {
        display: flex;

        justify-content: space-between;

        margin-bottom: 4px;

        .title {
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
            color: #000;
            letter-spacing: 0.5px;
        }

        .value {
            /* M3/label/medium */
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 16px; /* 133.333% */
            color: #000;
            letter-spacing: 0.5px;
        }
    }
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
