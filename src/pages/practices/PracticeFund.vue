<script setup>
import { useRouter, useRoute } from "vue-router";

import { BackTemplate, FundCard } from "@/components";

const router = useRouter();
const route = useRoute();

const next = () => {
    router.push({ name: "practice-calendar", params: { id: route.params.id } });
};
</script>

<template>
    <div class="sing-up">
        <BackTemplate title="Выберите фонд" noBackground>
            <NInput type="text" placeholder="Поиск по фондам" />
            <div class="desc">
                Выберите фонд, чтобы сделать вашу тренировку еще значимее. Ваш
                выбор поможет тем, кто в нем нуждается.
            </div>
            <FundCard />
            <FundCard />
            <FundCard />
            <FundCard />

            <div class="footer">
                <NButton class="btn-next" type="primary" @click="next"
                    >Продолжить</NButton
                >
            </div>
        </BackTemplate>
    </div>
</template>

<style scoped lang="scss">
.desc {
    margin-top: 10px;

    /* M3/body/small */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    color: #000;

    opacity: 0.5;
}

.footer {
    display: flex;

    align-items: center;
    justify-content: center;

    padding: 20px 0 10px;

    .btn-next {
        min-width: 300px;
    }
}
</style>
