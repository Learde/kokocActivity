<script setup>
import { storeToRefs } from "pinia";

import { BackTemplate } from "@/components";
import { IconPlus, IconMenuRight, isArray } from "@/shared";

import { useExercisesStore } from "./useExercisesStore";

const exercisesStore = useExercisesStore();
const { exercises, isLoading } = storeToRefs(exercisesStore);

const getExercisesByType = (type) => {
    if (!isArray(exercises.value)) return [];

    return exercises.value.filter(
        ({ training_type }) =>
            training_type.toUpperCase() === type.toUpperCase()
    );
};

exercisesStore.getExercises();
</script>

<template>
    <BackTemplate no-background title="Упражнения">
        <template #action>
            <NButton class="button-round add-exercise" type="primary" secondary>
                <IconPlus />
            </NButton>
        </template>
        <template #default>
            <NSpin :show="isLoading">
                <div class="exercises">
                    <NH3 class="roboto-flex heading heading-first">Силовые</NH3>
                    <div
                        class="exercise"
                        v-for="exercise in getExercisesByType('STRENGTH')"
                        :key="exercise.id"
                    >
                        <span>{{ exercise.name }}</span>
                        <IconMenuRight />
                    </div>
                    <NH3 class="roboto-flex heading">Кардио</NH3>
                    <div
                        class="exercise"
                        v-for="exercise in getExercisesByType('CARDIO')"
                        :key="exercise.id"
                    >
                        <span>{{ exercise.name }}</span>
                        <IconMenuRight />
                    </div>
                    <NH3 class="roboto-flex heading">Опорно-двигательная</NH3>
                    <div
                        class="exercise"
                        v-for="exercise in getExercisesByType('MSS')"
                        :key="exercise.id"
                    >
                        <span>{{ exercise.name }}</span>
                        <IconMenuRight />
                    </div>
                    <NH3 class="roboto-flex heading">На координацию</NH3>
                    <div
                        class="exercise"
                        v-for="exercise in getExercisesByType('COORDINATION')"
                        :key="exercise.id"
                    >
                        <span>{{ exercise.name }}</span>
                        <IconMenuRight />
                    </div>
                </div>
            </NSpin>
        </template>
    </BackTemplate>
</template>

<style scoped lang="scss">
.add-exercise {
    margin-left: auto;
}

.heading {
    padding: 16px 16px 8px;

    border-bottom: solid 1px #cac4d0;
}

.heading-first {
    padding-top: 0;
}

.exercises {
    margin: 0 -16px;
}

.exercise {
    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 16px;

    font-size: 16px;

    cursor: pointer;

    border-bottom: solid 1px #cac4d0;
}
</style>
