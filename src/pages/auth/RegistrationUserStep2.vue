<script setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useRouter } from "vue-router";

import { isNumber } from "@/shared";

const router = useRouter();

import { useRegistrationStore } from "./useRegistrationStore";

const registrationStore = useRegistrationStore();
const { gender, weight, height } = storeToRefs(registrationStore);

const skipStep = () => {
    router.push({ name: "RegistrationUserStep3" });
};

const nextStep = () => {
    router.push({ name: "RegistrationUserStep3" });
};

const genders = [
    {
        label: "Мужчина",
        value: "male",
    },
    { label: "Женщина", value: "female" },
    { label: "Не хочу говорить", value: "undefined" },
];

const isRegistrationDisabled = computed(() => {
    return !(gender.value || isNumber(weight.value) || isNumber(height.value));
});
</script>

<template>
    <NForm class="registration-form">
        <div class="grid-2">
            <NFormItem label="Рост">
                <NInputNumber
                    placeholder="Введите рост"
                    min="1"
                    :show-button="false"
                    v-model:value="height"
                />
            </NFormItem>
            <NFormItem label="Вес">
                <NInputNumber
                    placeholder="Введите вес"
                    min="1"
                    :show-button="false"
                    v-model:value="weight"
                />
            </NFormItem>
        </div>

        <NFormItem label="Ваш пол">
            <NSelect
                :options="genders"
                placeholder="Выберите пол"
                v-model:value="gender"
            />
        </NFormItem>

        <NText class="info" depth="2">
            Ваш вес, рост и пол помогут нам адаптировать тренировки и
            рекомендации специально для вас. Эти данные также используются для
            расчета благотворительных пожертвований на основе вашей активности.
        </NText>

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

.grid-2 {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 12px;
}
</style>
