<script setup>
import { ListCard } from "@/components";

defineProps({
    fund: {
        type: Object,
        required: true,
    },
    active: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div>
        <ListCard class="card" :class="{ active: active }">
            <template #title>
                <div class="name">
                    <img class="mini-img" src="/src/shared/images/yoga.png" />
                    <span class="card-title roboto-flex">{{ fund?.name }}</span>
                </div>
            </template>
            <template #footer>
                <div class="desc">
                    {{ fund?.description }}
                </div>
            </template>
        </ListCard>
    </div>
</template>

<style scoped lang="scss">
.active {
    background: linear-gradient(
            0deg,
            rgba(178, 247, 72, 25%) 0%,
            rgba(178, 247, 72, 25%) 100%
        ),
        #fff;
}

.card {
    min-width: 280px;
    margin-top: 16px;
    margin-right: 15px;

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

    .desc {
        flex: 1 0 0;

        /* M3/body/medium */
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        color: #000;
        letter-spacing: 0.25px;
    }
}
</style>
