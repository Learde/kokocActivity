<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

import { BackTemplate } from "@/components";
import { IconPlus, IconMenuRight, isArray } from "@/shared";

import { useTrainingsStore } from "./useTrainingsStore";

const trainingsStore = useTrainingsStore();
const { trainings, isLoading } = storeToRefs(trainingsStore);

const getTrainingsByType = (type) => {
    if (!isArray(trainings.value)) return [];

    return trainings.value.filter(
        ({ training_type }) =>
            training_type.toUpperCase() === type.toUpperCase()
    );
};

onMounted(() => {
    trainingsStore.getTrainings();
});
</script>

<template>
    <BackTemplate no-background title="Тренировки">
        <template #action>
            <NButton
                class="button-round add-training"
                type="primary"
                secondary
                @click="$router.push({ name: 'AdminTrainingAdd' })"
            >
                <IconPlus />
            </NButton>
        </template>
        <template #default>
            <NSpin :show="isLoading">
                <div class="trainings" v-if="trainings">
                    <NH3 class="roboto-flex heading heading-first">Силовые</NH3>
                    <div
                        class="training"
                        v-for="training in getTrainingsByType('STRENGTH')"
                        :key="training.id"
                        @click="
                            $router.push({
                                name: 'AdminTrainingEdit',
                                params: { id: training.id },
                            })
                        "
                    >
                        <span>{{ training.name }}</span>
                        <IconMenuRight />
                    </div>
                    <NH3 class="roboto-flex heading">Кардио</NH3>
                    <div
                        class="training"
                        v-for="training in getTrainingsByType('CARDIO')"
                        :key="training.id"
                        @click="
                            $router.push({
                                name: 'AdminTrainingEdit',
                                params: { id: training.id },
                            })
                        "
                    >
                        <span>{{ training.name }}</span>
                        <IconMenuRight />
                    </div>
                    <NH3 class="roboto-flex heading">Опорно-двигательная</NH3>
                    <div
                        class="training"
                        v-for="training in getTrainingsByType('MSS')"
                        :key="training.id"
                        @click="
                            $router.push({
                                name: 'AdminTrainingEdit',
                                params: { id: training.id },
                            })
                        "
                    >
                        <span>{{ training.name }}</span>
                        <IconMenuRight />
                    </div>
                    <NH3 class="roboto-flex heading">На координацию</NH3>
                    <div
                        class="training"
                        v-for="training in getTrainingsByType('COORDINATION')"
                        :key="training.id"
                        @click="
                            $router.push({
                                name: 'AdminTrainingEdit',
                                params: { id: training.id },
                            })
                        "
                    >
                        <span>{{ training.name }}</span>
                        <IconMenuRight />
                    </div>
                </div>
            </NSpin>
        </template>
    </BackTemplate>
</template>

<style scoped lang="scss">
.add-training {
    margin-left: auto;
}

.heading {
    padding: 16px 16px 8px;

    border-bottom: solid 1px #cac4d0;
}

.heading-first {
    padding-top: 0;
}

.trainings {
    margin: 0 -16px;
}

.training {
    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 16px;

    font-size: 16px;

    cursor: pointer;

    border-bottom: solid 1px #cac4d0;
}
</style>
