<script setup>
import { ref, computed } from "vue";

const title = ref("");

const isContinueDisabled = computed(() => {
    return title.value && String(title.value).trim().length === 0;
});
</script>

<template>
    <NForm class="practice-add">
        <NFormItem label="Название курса">
            <NInput placeholder="Введите название" v-model:value="title" />
        </NFormItem>

        <NButton class="add-btn" type="primary" :disabled="isContinueDisabled">
            Продолжить
        </NButton>
    </NForm>
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
</style>
