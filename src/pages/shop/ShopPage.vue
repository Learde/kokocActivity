<script setup>
import { BackTemplate, ListCard } from "@/components";
</script>

<template>
    <div>
        <BackTemplate title="Магазин" noBackground :showBack="false">
            <ListCard class="card">
                <template #title>
                    <span class="card-title roboto-flex">Большое спасибо</span>
                </template>
                <template #tag>
                    <span class="card-title roboto-flex">100 🪙</span>
                </template>
                <template #content>
                    <img src="/src/shared/images/sps.jpg" />
                </template>
            </ListCard>
            <ListCard class="card">
                <template #title>
                    <span class="card-title roboto-flex">Худи компании</span>
                </template>
                <template #tag>
                    <span class="card-title roboto-flex">1000 🪙</span>
                </template>
                <template #content>
                    <img src="/src/shared/images/trasher.jpg" />
                </template>
            </ListCard>
            <ListCard class="card">
                <template #title>
                    <span class="card-title roboto-flex"
                        >Оплачиваемый выходной</span
                    >
                </template>
                <template #tag>
                    <span class="card-title roboto-flex">5000 🪙</span>
                </template>
                <template #content>
                    <img src="/src/shared/images/yoga.png" />
                </template>
            </ListCard>
        </BackTemplate>
    </div>
</template>

<style scoped lang="scss">
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
</style>
