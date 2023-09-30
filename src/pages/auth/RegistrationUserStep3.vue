<script setup>
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { IconSearch, isNil, IconCheck } from "@/shared";

const router = useRouter();

import { useRegistrationStore } from "./useRegistrationStore";

const registrationStore = useRegistrationStore();
const { selectedDepartment } = storeToRefs(registrationStore);

const searchField = ref("");

const departments = [
    {
        title: "ИнноваЛайт",
        id: 1,
    },
    {
        title: "СмартСпектр",
        id: 2,
    },
    {
        title: "Эко-Тренд",
        id: 3,
    },
    {
        title: "ГлобалПрогресс",
        id: 4,
    },
    {
        title: "КреативНетворк",
        id: 5,
    },
    {
        title: "ЭнергоФьюжн",
        id: 6,
    },
    {
        title: "ВижнеТехнологии",
        id: 7,
    },
    {
        title: "ПроТренд",
        id: 8,
    },
    {
        title: "ЛайфЛайн Групп",
        id: 9,
    },
];

const filteredDepartments = computed(() => {
    if (!departments) return [];

    if (!searchField.value || String(searchField.value).trim().length === 0) {
        return departments;
    }

    return departments.filter(({ title }) => {
        return title.toUpperCase().includes(searchField.value.toUpperCase());
    });
});

const nextStep = () => {
    router.push({ name: "RegistrationUserStep4" });
};

const selectDepartment = (department) => {
    if (selectedDepartment.value?.id === department.id) {
        selectedDepartment.value = null;

        return;
    }

    selectedDepartment.value = department;
};
</script>

<template>
    <div class="select-department-page">
        <NInput placeholder="Поиск" v-model:value="searchField">
            <template #prefix>
                <IconSearch class="search-icon" />
            </template>
        </NInput>
        <div class="departments">
            <div
                class="department"
                :class="{ active: department.id === selectedDepartment?.id }"
                v-for="department in filteredDepartments"
                :key="department.id"
                @click="selectDepartment(department)"
            >
                <span class="department-title">{{ department.title }}</span>
                <IconCheck v-if="department.id === selectedDepartment?.id" />
            </div>
        </div>

        <NButton
            class="select-department-btn"
            type="primary"
            block
            @click="nextStep"
            :disabled="isNil(selectedDepartment)"
        >
            Продолжить
        </NButton>
    </div>
</template>

<style scoped lang="scss">
.search-icon {
    display: flex;

    align-items: center;
    justify-content: center;
}

.select-department-page {
    display: flex;

    flex-direction: column;

    height: 100%;
}

.select-department-btn {
    margin-top: auto;
}

.department-title {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    color: var(--m-3-sys-light-on-surface, #1d1b20);
    letter-spacing: 0.5px;
}

.departments {
    display: flex;

    flex-direction: column;

    gap: 6px;

    height: calc(
        var(--vh, 1vh) * 100 - 112px - 16px - 44px - 16px - 16px - 44px - 20px -
            16px
    );

    margin-top: 16px;
    overflow: auto;
}

.department {
    display: flex;

    align-items: center;
    justify-content: space-between;

    min-height: 50px;
    max-height: 50px;
    padding: 0 18px 0 10px;

    cursor: pointer;

    border-radius: 8px;

    transition: all 0.25s;
}

.department:hover {
    background-color: #e8def8;
}

.department.active {
    cursor: default;

    background-color: #e8def8;
}
</style>
