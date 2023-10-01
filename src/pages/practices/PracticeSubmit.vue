<script setup>
import { useNotification } from "naive-ui";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

import { BackTemplate, useFundStore } from "@/components";
import { getDataMapper, mapField, mapArray, isArray } from "@/shared";

// eslint-disable-next-line boundaries/element-types
import { useExercisesStore } from "../admin/useExercisesStore";
const notification = useNotification();

const exercisesStore = useExercisesStore();
const router = useRouter();

const mapEntity = getDataMapper({
    value: mapField("id", Number),
    label: mapField("name"),
});
const mapFunds = mapArray(mapEntity);
const mapExercises = mapArray(mapEntity);

const fundStore = useFundStore();
const isLoading = ref(false);

const formData = ref({
    fund: null,
    exercise: null,
    repeats: 1,
});

const optionsFunds = computed(() => {
    if (!isArray(fundStore.fundes)) return [];

    return mapFunds(fundStore.fundes);
});

const optionsExercises = computed(() => {
    if (!isArray(exercisesStore.exercises)) return [];

    return mapExercises(exercisesStore.exercises);
});

onMounted(() => {
    fundStore.fetchFundes();
    exercisesStore.getExercises();
});

const submit = () => {
    notification.success({
        content: "Вам засчитано упражнение",
        duration: 3000,
    });

    router.go(-1);
};
</script>

<template>
    <NSpin :show="isLoading">
        <BackTemplate title="Подтверждение тренировки">
            <div style="height: 100%; display: flex; flex-direction: column">
                <NFormItem label="Фонд" style="display: none">
                    <NSelect
                        placeholder="Выберите фонд"
                        :options="optionsFunds"
                        v-model:value="formData.fund"
                    />
                </NFormItem>
                <NFormItem label="Упражнение">
                    <NSelect
                        placeholder="Выберите упражнение"
                        :options="optionsExercises"
                        v-model:value="formData.exercise"
                    />
                </NFormItem>
                <NFormItem label="Количество повторений">
                    <NInputNumber
                        style="width: 100%"
                        v-model:value="formData.repeats"
                        min="1"
                    />
                </NFormItem>
                <NButton
                    type="primary"
                    block
                    style="margin-top: auto"
                    @click="submit"
                    :disabled="!formData.exercise || formData.repeats <= 0"
                >
                    Отправить
                </NButton>
            </div>
        </BackTemplate>
    </NSpin>
</template>

<style scoped lang="scss"></style>
