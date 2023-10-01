<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

import { BackTemplate } from "@/components";
import {
    addExercise,
    removeExercise,
    editExercise,
    getExercise,
    isNil,
    IconDelete,
} from "@/shared";

const props = defineProps({
    id: {
        type: Number,
        default: null,
    },
});

const router = useRouter();

const isLoading = ref(false);

const exercise = ref({
    name: "",
    description: "",
    cost_per_retry: null,
    cost_per_retry_coins: null,
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

const remove = async () => {
    isLoading.value = true;
    await removeExercise(props.id);
    isLoading.value = false;

    router.push({ name: "AdminExercises" });
};

const edit = async () => {
    isLoading.value = true;
    await editExercise(props.id, exercise.value);
    isLoading.value = false;

    router.push({ name: "AdminExercises" });
};

const add = async () => {
    isLoading.value = true;
    await addExercise(exercise.value);
    isLoading.value = false;

    router.push({ name: "AdminExercises" });
};

onMounted(async () => {
    if (isEdit.value) {
        isLoading.value = true;

        exercise.value = await getExercise(props.id);

        isLoading.value = false;
    }
});
</script>

<template>
    <NSpin :show="isLoading">
        <BackTemplate title="Создание упражнения" no-background>
            <template #action>
                <IconDelete v-if="isEdit" @click="remove" />
            </template>
            <template #default>
                <NFormItem label="Название">
                    <NInput
                        placeholder="Введите название"
                        v-model:value="exercise.name"
                    />
                </NFormItem>
                <NFormItem label="Описание">
                    <NInput
                        type="textarea"
                        placeholder="Введите описание"
                        class="textarea"
                        v-model:value="exercise.description"
                    />
                </NFormItem>
                <NFormItem label="Тип">
                    <NSelect
                        placeholder="Выберите тип"
                        :options="options"
                        v-model:value="exercise.training_type"
                    />
                </NFormItem>
                <div class="grid-2">
                    <NFormItem label="Кол-во купюр">
                        <NInputNumber
                            :show-button="false"
                            min="0"
                            placeholder="Например, 5"
                            v-model:value="exercise.cost_per_retry"
                        />
                    </NFormItem>
                    <NFormItem label="Кол-во монет">
                        <NInputNumber
                            :show-button="false"
                            min="0"
                            placeholder="Например, 25"
                            v-model:value="exercise.cost_per_retry_coins"
                        />
                    </NFormItem>
                </div>
                <NText class="info" depth="2">
                    От этого зависит, сколько у пользователей по итогу будет
                    валюты. Это цена за одно повторение.
                </NText>
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
.textarea {
    border-radius: 12px;
}

.grid-2 {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 10px;
}

.info {
    font-size: 12px;
    line-height: 16px;
}

.mt {
    margin-top: 24px;
}
</style>
