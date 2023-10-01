<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { BackTemplate } from "@/components";
import {
    addPractice,
    getPractice,
    removePractice,
    editPractice,
    isNil,
    IconDelete,
    IconPlus,
} from "@/shared";

const isLoading = ref(false);

const props = defineProps({
    id: {
        type: Number,
        default: null,
    },
});

const router = useRouter();

const practice = ref({
    name: "",
    description: "",
});

const isEdit = computed(() => {
    return !isNil(props.id);
});
const reload = async () => {
    isLoading.value = true;

    practice.value = await getPractice(props.id);

    isLoading.value = false;
};

const remove = async () => {
    isLoading.value = true;
    await removePractice(props.id);
    isLoading.value = false;

    router.push({ name: "AdminPractices" });
};

const edit = async () => {
    isLoading.value = true;
    await editPractice(props.id, practice.value);
    isLoading.value = false;

    reload();
};

const add = async () => {
    isLoading.value = true;
    const { id } = await addPractice(practice.value);

    isLoading.value = false;

    await router.push({ name: "AdminPracticeEdit", params: { id } });

    reload();
};

// eslint-disable-next-line no-unused-vars
const addTraining = () => {
    router.push({
        name: "AdminPracticeEditTrainings",
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
            :title="isEdit ? 'Редактирование курса' : 'Создание курса'"
            no-background
        >
            <template #action>
                <IconDelete v-if="isEdit" @click="remove" />
            </template>
            <template #default>
                <NForm class="practice-add">
                    <NFormItem label="Название курса">
                        <NInput
                            placeholder="Введите название"
                            v-model:value="practice.name"
                        />
                    </NFormItem>
                    <NFormItem label="Описание">
                        <NInput
                            type="textarea"
                            placeholder="Введите описание"
                            class="textarea"
                            v-model:value="practice.description"
                        />
                    </NFormItem>

                    <div v-if="isEdit">
                        <NH4 class="roboto-flex h4">Тренировки</NH4>
                        <NText class="info" depth="2">
                            Итоговая стоимость:
                            {{ practice.totalCost }} купюр 💸
                            {{ Math.round(practice.totalCost / 10) }} монет 🪙
                        </NText>
                        <NButton
                            class="add-exercise"
                            type="tertiary"
                            ghost
                            block
                            @click="addTraining"
                        >
                            <IconPlus class="training-plus" />
                            Добавить тренировки
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
                    <NButton
                        v-else
                        class="mt"
                        type="primary"
                        block
                        @click="edit"
                    >
                        Сохранить
                    </NButton>
                </NForm>
            </template>
        </BackTemplate>
    </NSpin>
</template>

<style scoped lang="scss">
.practice-add {
    display: flex;

    flex-direction: column;

    height: 100%;
}

.add-btn {
    margin-top: auto;
}

.mt {
    margin-top: 24px;
}

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

.training-plus {
    position: relative;
    bottom: 1px;

    margin-right: 8px;
}

.add-exercise {
    margin-top: 8px;
}
</style>
