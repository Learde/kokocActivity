<script setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

import { useRegistrationStore } from "./useRegistrationStore";

const registrationStore = useRegistrationStore();
const { description } = storeToRefs(registrationStore);

const router = useRouter();

const skipStep = () => {
    router.push({ name: "RegistrationFundStep3" });
};

const nextStep = () => {
    router.push({ name: "RegistrationFundStep3" });
};

const isRegistrationDisabled = computed(() => {
    return !(description.value && String(description.value).length > 0);
});
</script>

<template>
    <NForm class="registration-form">
        <NInput placeholder="Введите описание" v-model:value="description" />
        <NButton
            class="registration-button"
            type="primary"
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
</template>

<style scoped lang="scss">
.registration-form {
    display: flex;

    flex-direction: column;

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
