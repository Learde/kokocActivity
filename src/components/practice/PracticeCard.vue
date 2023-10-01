<script setup>
import { useRouter } from "vue-router";

import { ListCard } from "@/components";

const props = defineProps({
    small: {
        type: Boolean,
        default: false,
    },
    practice: {
        type: Object,
        required: true,
    },
    route: {
        type: String,
        default: "practice-card",
    },
});

const router = useRouter();
const toCard = (id) => {
    router.push({ name: props.route, params: { id } });
};
</script>

<template>
    <div>
        <ListCard class="card" @click="toCard(practice.id)">
            <template #title>
                <span v-if="!props.small" class="card-title roboto-flex">{{
                    props.practice.name
                }}</span>
                <div v-else class="name">
                    <img class="mini-img" src="/src/shared/images/yoga.png" />
                    <span class="card-title roboto-flex">{{
                        props.practice.name
                    }}</span>
                </div>
            </template>
            <template #tag>
                <NTag checked checkable> Йога </NTag>
            </template>
            <template v-if="!props.small" #content>
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
                    <span class="value"> {{ props.practice.totalCost }} </span>
                </div>
                <div class="footer-item">
                    <span class="title"> 🪙 Монеты </span>
                    <span class="value">
                        {{ props.practice.totalCost / 10 }}
                    </span>
                </div>
            </template>
        </ListCard>
    </div>
</template>

<style scoped lang="scss">
.card {
    min-width: 280px;
    margin-top: 16px;
    margin-right: 15px;

    cursor: pointer;

    border: 2px solid var(--m-3-sys-light-secondary-container, #dce7c7);

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

        background: var(--m-3-sys-light-secondary-container, #dce7c7);
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
</style>
