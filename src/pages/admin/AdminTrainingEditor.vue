<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

import { BackTemplate } from "@/components";
import {
    addTraining,
    removeTraining,
    editTraining,
    getTraining,
    isNil,
    IconDelete,
    IconPlus,
} from "@/shared";

const props = defineProps({
    id: {
        type: Number,
        default: null,
    },
});

const router = useRouter();

const isLoading = ref(false);

const training = ref({
    name: "",
    training_type: null,
});

const options = [
    {
        label: "Силовые",
        value: "STRENGTH",
    },
    {
        label: "Кардио",
        value: "CARDIO",
    },
    {
        label: "Опорно-двигательная",
        value: "MSS",
    },
    {
        label: "На координацию",
        value: "COORDINATION",
    },
];

const isEdit = computed(() => {
    return !isNil(props.id);
});

const reload = async () => {
    isLoading.value = true;

    training.value = await getTraining(props.id);

    isLoading.value = false;
};

const remove = async () => {
    isLoading.value = true;
    await removeTraining(props.id);
    isLoading.value = false;

    router.push({ name: "AdminTrainings" });
};

const edit = async () => {
    isLoading.value = true;
    await editTraining(props.id, training.value);
    isLoading.value = false;

    reload();
};

const add = async () => {
    isLoading.value = true;
    const { id } = await addTraining(training.value);

    isLoading.value = false;

    await router.push({ name: "AdminTrainingEdit", params: { id } });

    reload();
};

const addExercises = () => {
    router.push({
        name: "AdminTrainingEditExercises",
        params: { id: props.id },
    });
};

onMounted(async () => {
    if (isEdit.value) {
        reload();
    }
});
</script>

<template>
    <NSpin :show="isLoading">
        <BackTemplate
            :title="
                isEdit ? 'Редактирование тренировки' : 'Создание тренировки'
            "
            no-background
        >
            <template #action>
                <IconDelete v-if="isEdit" @click="remove" />
            </template>
            <template #default>
                <NFormItem label="Название">
                    <NInput
                        placeholder="Введите название"
                        v-model:value="training.name"
                    />
                </NFormItem>
                <NFormItem label="Тип">
                    <NSelect
                        placeholder="Выберите тип"
                        :options="options"
                        v-model:value="training.training_type"
                    />
                </NFormItem>
                <div v-if="isEdit">
                    <NH4 class="roboto-flex h4">Упражнения</NH4>
                    <NText class="info" depth="2">
                        Итоговая стоимость: {{ training.training_cost }} купюр
                        💸 {{ Math.round(training.training_cost / 10) }} монет
                        🪙
                    </NText>
                    <NButton
                        class="add-exercise"
                        type="tertiary"
                        ghost
                        block
                        @click="addExercises"
                    >
                        <IconPlus class="training-plus" />
                        Добавить упражнения
                    </NButton>
                </div>
                <NButton
                    v-if="!isEdit"
                    class="mt"
                    type="primary"
                    block
                    @click="add"
                >
                    Создать
                </NButton>
                <NButton v-else class="mt" type="primary" block @click="edit">
                    Сохранить
                </NButton>
            </template>
        </BackTemplate>
    </NSpin>
</template>

<style scoped lang="scss">
.h4 {
    margin-bottom: 4px;
}

.textarea {
    border-radius: 12px;
}

.grid-2 {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 10px;
}

.info {
    display: inline-block;

    margin-bottom: 12px;

    font-size: 12px;
    line-height: 16px;
}

.mt {
    margin-top: 24px;
}

.training-plus {
    position: relative;
    bottom: 1px;

    margin-right: 8px;
}

.add-exercise {
    margin-top: 8px;
}
</style>
