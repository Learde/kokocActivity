<script setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

import { useRegistrationStore } from "./useRegistrationStore";

const registrationStore = useRegistrationStore();
const { description, isLoading } = storeToRefs(registrationStore);

const router = useRouter();

const nextStep = async () => {
    await registrationStore.registerDepartment();
    router.push({ name: "RegistrationFundStep3" });
};

const isRegistrationDisabled = computed(() => {
    return !(description.value && String(description.value).length > 0);
});
</script>

<template>
    <NSpin class="registration-wrapper" :show="isLoading">
        <NForm class="registration-form">
            <NInput
                placeholder="Введите описание"
                v-model:value="description"
            />
            <NButton
                class="registration-button"
                type="tertiary"
                block
                ghost
                @click="skipStep"
            >
                Пропустить
            </NButton>
            <NButton
                type="primary"
                block
                :disabled="isRegistrationDisabled"
                @click="nextStep"
            >
                Продолжить
            </NButton>
        </NForm>
    </NSpin>
</template>

<style scoped lang="scss">
.registration-form {
    display: flex;

    flex-direction: column;

    height: 100%;
}

.registration-wrapper {
    height: 100%;
}

.registration-button {
    margin-top: auto;
    margin-bottom: 8px;
}

.info {
    font-size: 12px;
    line-height: 16px;
}
</style>
