<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const skipStep = () => {
    router.push({ name: "RegistrationStep3" });
};

const genders = [
    {
        label: "Мужчина",
        value: "male",
    },
    { label: "Женщина", value: "female" },
    { label: "Не хочу говорить", value: "undefined" },
];
</script>

<template>
    <NForm class="registration-form">
        <div class="grid-2">
            <NFormItem label="Рост">
                <NInputNumber placeholder="Введите рост" min="1" />
            </NFormItem>
            <NFormItem label="Вес">
                <NInputNumber placeholder="Введите вес" min="1" />
            </NFormItem>
        </div>

        <NFormItem label="Ваш пол">
            <NSelect :options="genders" placeholder="Выберите пол" />
        </NFormItem>

        <NText class="info" depth="2">
            Ваш вес, рост и пол помогут нам адаптировать тренировки и
            рекомендации специально для вас. Эти данные также используются для
            расчета благотворительных пожертвований на основе вашей активности.
        </NText>

        <NButton
            class="registration-button"
            type="primary"
            block
            ghost
            @click="skipStep"
        >
            Пропустить
        </NButton>
        <NButton type="primary" block> Продолжить </NButton>
    </NForm>
</template>

<style scoped lang="scss">
.registration-form {
    display: flex;

    flex-direction: column;

    height: 100%;
    padding-top: 20px;
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
