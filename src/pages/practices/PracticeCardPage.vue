<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

import { BackTemplate, usePracticeStore } from "@/components";

const router = useRouter();
const route = useRoute();

const singUpPractice = () => {
    router.push({ name: "practice-fund", params: { id: route.params.id } });
};

const goToSubmit = () => {
    router.push({ name: "PracticeSubmit", params: { id: route.params.id } });
};

const practice = ref(null);
const attach = ref(false);
const store = usePracticeStore();

const { loading } = storeToRefs(store);

onMounted(async () => {
    practice.value = await store.practiceById(route.params.id);
    const userPractices = await store.fetchUserPractices();

    if (userPractices.map((el) => el.id).includes(practice.value.id)) {
        attach.value = true;
    }
});
</script>

<template>
    <NSpin :show="loading">
        <BackTemplate
            v-if="!loading && practice"
            :title="practice.name"
            noBackground
        >
            <div class="practice-card">
                <img class="img" src="/src/shared/images/yoga.png" />
                <div class="main-title">О курсе</div>
                <div class="desc">
                    {{ practice.description }}
                </div>
                <div class="main-title">Длительность</div>
                <div class="desc">Курс займет 2 недели</div>
                <div class="main-title">Награды</div>
                <div class="tags">
                    <NTag checked checkable> 💸 {{ practice.totalCost }} </NTag>
                    <NTag checked checkable>
                        🪙 {{ practice.totalCost / 10 }}
                    </NTag>
                </div>
                <div class="main-title">Упражнения</div>
                <div class="main-title">
                    К сожалению, в данный момент упражнения недоступны,
                    поскольку интеграция с таким серьезным решением как Fora
                    Vision требует немного больше времени, чем 2 дня
                </div>
                <div class="trainings">
                    <img class="img-mini" src="/src/shared/images/exer.png" />
                    <img class="img-mini" src="/src/shared/images/exer.png" />
                    <img class="img-mini" src="/src/shared/images/exer.png" />
                    <img class="img-mini" src="/src/shared/images/exer.png" />
                </div>
            </div>
        </BackTemplate>
        <div class="footer-container">
            <NButton
                v-if="!attach"
                class="btn"
                type="primary"
                @click="singUpPractice"
            >
                Записаться
            </NButton>
            <NButton v-else class="btn" type="primary" @click="goToSubmit">
                Приступить к занятию
            </NButton>
        </div>
    </NSpin>
</template>

<style scoped lang="scss">
.practice-card {
    padding-bottom: 80px;
}

.img {
    width: 100%;
}

.img-mini {
    width: 200px;
    height: 200px;
}

.main-title {
    margin-top: 16px;

    /* Title/H3 */
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%; /* 24px */
    color: #000;
}

.desc {
    margin-top: 16px;

    /* M3/body/large */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    color: #000;
    letter-spacing: 0.5px;
}

.tags {
    display: flex;

    gap: 10px;

    margin-top: 16px;

    .n-tag {
        margin-right: 0;

        /* M3/label/large */
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 142.857% */

        color: var(--m-3-sys-light-on-secondary-container, #1d192b) !important;
        text-align: center;
        letter-spacing: 0.1px;

        background: var(
            --m-3-sys-light-secondary-container,
            #e8def8
        ) !important;
        border: none;
        border-radius: 5px;
    }
}

.footer-container {
    position: fixed;
    right: 16px;
    bottom: 80px;
    left: 16px;
    z-index: 9999999;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 10px 0;

    background: white;

    border-top: 1px solid rgba(0, 0, 0, 10%);

    .btn {
        min-width: 250px;
    }
}

.trainings {
    display: flex;

    gap: 15px;

    margin-top: 16px;
    overflow: auto;
}
</style>
