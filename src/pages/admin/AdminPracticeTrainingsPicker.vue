<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import { BackTemplate } from "@/components";
import { IconCheck, isArray, addTrainingToPractice } from "@/shared";

import { useTrainingsStore } from "./useTrainingsStore";

const props = defineProps({
    id: Number,
});

const router = useRouter();

const trainingsStore = useTrainingsStore();
const { trainings, isLoading } = storeToRefs(trainingsStore);

const pickedExercises = ref([]);

const getExercisesByType = (type) => {
    if (!isArray(trainings.value)) return [];

    return trainings.value.filter(
        ({ training_type }) =>
            training_type.toUpperCase() === type.toUpperCase()
    );
};

const isChecked = ({ id }) => {
    return (
        pickedExercises.value.findIndex(
            ({ id: idOther }) => Number(idOther) === Number(id)
        ) >= 0
    );
};

const pickExercise = (exercise) => {
    if (!isChecked(exercise)) {
        pickedExercises.value.push(exercise);

        return;
    }

    pickedExercises.value = pickedExercises.value.filter(
        ({ id }) => Number(id) !== Number(exercise.id)
    );
};

const save = () => {
    isLoading.value = true;
    pickedExercises.value.forEach(async (exercise) => {
        await addTrainingToPractice(props.id, exercise.id);
    });
    isLoading.value = false;

    router.push({ name: "AdminPracticeEdit", params: { id: props.id } });
};

onMounted(() => {
    trainingsStore.getTrainings();
});
</script>

<template>
    <BackTemplate no-background title="Выбор тренировки">
        <template #action>
            <NButton
                class="button-round add-exercise"
                type="primary"
                secondary
                @click="save"
            >
                <IconCheck />
            </NButton>
        </template>
        <template #default>
            <NSpin :show="isLoading">
                <div class="trainings" v-if="trainings">
                    <NH3 class="roboto-flex heading heading-first">Силовые</NH3>
                    <div
                        class="exercise"
                        v-for="exercise in getExercisesByType('STRENGTH')"
                        :key="exercise.id"
                        @click="pickExercise(exercise)"
                    >
                        <span>{{ exercise.name }}</span>
                        <NCheckbox :checked="isChecked(exercise)" />
                    </div>
                    <NH3 class="roboto-flex heading">Кардио</NH3>
                    <div
                        class="exercise"
                        v-for="exercise in getExercisesByType('CARDIO')"
                        :key="exercise.id"
                        @click="pickExercise(exercise)"
                    >
                        <span>{{ exercise.name }}</span>
                        <NCheckbox :checked="isChecked(exercise)" />
                    </div>
                    <NH3 class="roboto-flex heading">Опорно-двигательная</NH3>
                    <div
                        class="exercise"
                        v-for="exercise in getExercisesByType('MSS')"
                        :key="exercise.id"
                        @click="pickExercise(exercise)"
                    >
                        <span>{{ exercise.name }}</span>
                        <NCheckbox :checked="isChecked(exercise)" />
                    </div>
                    <NH3 class="roboto-flex heading">На координацию</NH3>
                    <div
                        class="exercise"
                        v-for="exercise in getExercisesByType('COORDINATION')"
                        :key="exercise.id"
                        @click="pickExercise(exercise)"
                    >
                        <span>{{ exercise.name }}</span>
                        <NCheckbox :checked="isChecked(exercise)" />
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

.trainings {
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
