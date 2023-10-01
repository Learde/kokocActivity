<script setup>
import { useRouter } from "vue-router";

import { BackTemplate } from "@/components";
import { IconMenuRight } from "@/shared";

const router = useRouter();

const goTo = (name) => {
    router.push({ name });
};
</script>

<template>
    <BackTemplate
        :show-back="false"
        :has-content-p-t="false"
        title="Управление"
    >
        <div class="admin-settings" @click="goTo('AdminExercises')">
            <span>Настроить упражнения</span>
            <IconMenuRight />
        </div>
        <div class="admin-settings" @click="goTo('AdminTrainings')">
            <span>Настроить тренировки</span>
            <IconMenuRight />
        </div>
    </BackTemplate>
</template>

<style scoped lang="scss">
.admin-settings {
    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 16px;
    margin: 0 -16px;

    font-size: 16px;

    cursor: pointer;

    border-bottom: solid 1px #cac4d0;
}
</style>
