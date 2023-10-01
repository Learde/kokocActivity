<script setup>
import { useRouter } from "vue-router";

import { UserCard } from "@/components";
import { useAuthStore } from "@/modules";
import { IconLogout } from "@/shared";

const router = useRouter();
const store = useAuthStore();

const toRating = () => {
    router.push({ name: "rating" });
};

const logOut = () => {
    store.removeToken();
    location.reload();
};
</script>

<template>
    <div>
        <div class="header">
            <NH2 class="title roboto-flex">Сводка</NH2>
            <IconLogout @click="logOut" />
        </div>
        <div class="main">
            <NH3 class="active roboto-flex">Активность</NH3>
            <div class="card">
                <div class="progress">
                    <div class="text">
                        <span class="title roboto-flex">Ваш прогресс</span>
                        <span class="actives">7/9 упражнений</span>
                        <span class="lvl">Вы на 8 уровне 🔥</span>
                    </div>
                    <div class="chart"></div>
                </div>
                <div class="info">
                    <div class="info-item">
                        <span class="name"> Купюры 💸</span>
                        <span class="value"> 200 шт. </span>
                    </div>
                    <div class="info-item">
                        <span class="name"> Монеты 🪙</span>
                        <span class="value"> 50 шт. </span>
                    </div>
                    <div class="info-item">
                        <span class="name"> Ваш рейтинг 🥇</span>
                        <span class="value"> 3-е место </span>
                    </div>
                </div>
            </div>
            <NButton class="btn" type="primary">
                Продолжить последнее занятие
            </NButton>
            <div class="rating">
                <NH2 class="rating-title roboto-flex">Рейтинг</NH2>
                <UserCard />
                <UserCard />
                <UserCard />
            </div>
            <NButton
                class="btn btn-rating"
                type="tertiary"
                ghost
                @click="toRating"
            >
                Открыть полный рейтинг
            </NButton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 0 16px;

    .title {
        margin: 0;

        // font-family: "Roboto Flex";
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: 120%;
    }
}

.main {
    padding: 0 0 16px;
    overflow: auto;

    .active {
        margin-bottom: 12px;
    }

    .btn {
        width: 100%;
        margin-top: 10px;
    }

    .card {
        display: flex;

        flex-direction: column;

        padding: 12px;

        color: white;

        background: #000;
        border-radius: 12px;

        .progress {
            display: flex;

            align-items: center;

            justify-content: space-between;

            .text {
                display: flex;

                flex-direction: column;
            }

            .title {
                margin-bottom: 18px;

                font-size: 16px;
                font-style: normal;
                font-weight: 800;
                line-height: 120%;
            }

            .actives {
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px; /* 142.857% */
                letter-spacing: 0.1px;
            }

            .lvl {
                margin-top: 4px;

                font-size: 12px;
                font-style: normal;
                font-weight: 500;
                line-height: 16px; /* 133.333% */
                color: rgba(255, 255, 255, 50%);
                letter-spacing: 0.5px;
            }

            .chart {
                width: 90px;
                height: 90px;

                border: 20px solid pink;
                border-radius: 100px;
            }
        }

        .info {
            display: grid;

            grid-template-columns: 1fr 1fr 1fr;

            .info-item {
                display: flex;

                flex-direction: column;

                margin-top: 16px;

                .name {
                    /* M3/label/medium */
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 16px; /* 133.333% */
                    color: rgba(255, 255, 255, 50%);
                    letter-spacing: 0.5px;
                }

                .value {
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 20px; /* 142.857% */
                    letter-spacing: 0.1px;
                }
            }
        }
    }

    .rating {
        margin-top: 16px;

        .rating-title {
            margin-bottom: 12px;
        }
    }
}
</style>
