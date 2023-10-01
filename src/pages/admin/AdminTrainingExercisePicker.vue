<script setup>
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import { BackTemplate } from "@/components";
import { IconCheck, isArray, addExerciseToTraining } from "@/shared";

import { useExercisesStore } from "./useExercisesStore";

const props = defineProps({
    id: Number,
});

const router = useRouter();

const exercisesStore = useExercisesStore();
const { exercises, isLoading } = storeToRefs(exercisesStore);

const pickedExercises = ref([]);

const getExercisesByType = (type) => {
    if (!isArray(exercises.value)) return [];

    return exercises.value.filter(
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
        await addExerciseToTraining(props.id, exercise.id);
    });
    isLoading.value = false;

    router.push({ name: "AdminTrainingEdit", params: { id: props.id } });
};

onMounted(() => {
    exercisesStore.getExercises();
});
</script>

<template>
    <BackTemplate no-background title="Выбор упражнений">
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
                <div class="exercises" v-if="exercises">
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
