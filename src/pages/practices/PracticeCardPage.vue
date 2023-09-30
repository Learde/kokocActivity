<script setup>
import { useRouter, useRoute } from "vue-router";

import { BackTemplate } from "@/components";

const router = useRouter();
const route = useRoute();

console.log(route);

const singUpPractice = () => {
    router.push({ name: "practice-fund", params: { id: route.params.id } });
};
</script>

<template>
    <BackTemplate title="Курс Какой-то" noBackground>
        <div class="practice-card">
            <img class="img" src="/src/shared/images/yoga.png" />
            <div class="main-title">О курсе</div>
            <div class="desc">
                Здесь вас ждет увлекательное путешествие к гармонии тела и души
                через искусство йоги. Наш курс создан для тех, кто ищет способ
                укрепить свое тело, улучшить гибкость и приобрести навыки для
                внутренней релаксации и спокойствия.
            </div>
            <div class="main-title">Длительность</div>
            <div class="desc">Курс займет 2 недели</div>
            <div class="main-title">Награды</div>
            <div class="tags">
                <NTag checked checkable> 💸 100 </NTag>
                <NTag checked checkable> 🪙 200 </NTag>
            </div>
            <div class="main-title">Упражнения</div>
            <div class="trainings">
                <img class="img-mini" src="/src/shared/images/yoga.png" />
                <img class="img-mini" src="/src/shared/images/yoga.png" />
                <img class="img-mini" src="/src/shared/images/yoga.png" />
                <img class="img-mini" src="/src/shared/images/yoga.png" />
            </div>
        </div>
    </BackTemplate>
    <div class="footer-container">
        <NButton class="btn" type="primary" @click="singUpPractice">
            Записаться
        </NButton>
    </div>
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
