<script setup>
import { useRouter } from "vue-router";

import { PracticeCard } from "@/components";
import { IconPlus } from "@/shared";

const router = useRouter();

const goToAdd = () => {
    router.push({ name: "AdminPracticesAddStep1" });
};
</script>

<template>
    <div>
        <div class="header">
            <NH3 class="roboto-flex">Ваши курсы</NH3>
            <NButton
                type="primary"
                round
                class="button-round"
                secondary
                @click="goToAdd"
            >
                <IconPlus />
            </NButton>
        </div>
        <PracticeCard small />
        <PracticeCard small />
        <PracticeCard small />
    </div>
</template>

<style scoped lang="scss">
.header {
    display: flex;

    justify-content: space-between;
}
</style>
