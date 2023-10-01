<script setup>
import { useMessage, useDialog } from "naive-ui";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import { BackTemplate, usePracticeStore } from "@/components";

const days = ref([]);

const message = useMessage();
const dialog = useDialog();

const router = useRouter();
const route = useRoute();

const store = usePracticeStore();

const next = () => {
    router.push({ name: "practice-confirm", params: { id: route.params.id } });
};

const confirm = async () => {
    await store.confirm(route.params.id, route.params.fund, days.value);
};

const handleConfirm = () => {
    confirm();
    dialog.warning({
        title: "Напоминание",
        content:
            "Сохраните расписание в своем календаре и не пропустите ни одной тренировки!",
        positiveText: "Импорт в календарь",
        negativeText: "пропустить",
        onPositiveClick: () => {
            message.success("Sure");
            next();
        },
        onNegativeClick: () => {
            message.error("Not Sure");
            next();
        },
    });
};
</script>

<template>
    <BackTemplate title="Выберите дни" noBackground>
        <div class="main">
            <div class="desc">
                Регулярные тренировки обеспечивают лучшие результаты: укрепление
                тела, улучшение здоровья и достижение целей.
            </div>
            <NCheckboxGroup v-model:value="days">
                <div class="items">
                    <NCheckbox value="0" label="Понедельник" size="large" />
                    <NCheckbox value="1" label="Вторник" size="large" />
                    <NCheckbox value="2" label="Среда" size="large" />
                    <NCheckbox value="3" label="Чертверг" size="large" />
                    <NCheckbox value="4" label="Пятница" size="large" />
                    <NCheckbox value="5" label="Суббота" size="large" />
                    <NCheckbox value="6" label="Воскресенье" size="large" />
                </div>
            </NCheckboxGroup>

            <div class="footer">
                <NButton class="btn-next" type="primary" @click="handleConfirm"
                    >Продолжить</NButton
                >
            </div>
        </div>
    </BackTemplate>
</template>

<style scoped lang="scss">
.main {
    display: flex;

    flex-direction: column;

    height: 100%;
}

.desc {
    /* M3/body/small */
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    color: #000;

    opacity: 0.5;
}

.items {
    display: flex;

    flex-direction: column;

    gap: 16px;

    margin-top: 16px;
}

.items:deep(.n-checkbox__label) {
    /* M3/body/large */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    color: var(--m-3-sys-light-on-surface, #1d1b20);
    letter-spacing: 0.5px;
}

.footer {
    display: flex;

    align-items: center;
    justify-content: center;

    height: 100%;

    padding: 20px 0 10px;

    .btn-next {
        min-width: 300px;
        margin-top: auto;
    }
}
</style>
