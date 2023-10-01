<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { PracticeCard, usePracticeStore } from "@/components";
import { IconPlus } from "@/shared";

const router = useRouter();

const store = usePracticeStore();

const { practices, loading } = storeToRefs(store);

onMounted(async () => {
    await store.fetchPractices();
});

const goToAdd = () => {
    router.push({ name: "AdminPracticeAdd" });
};
</script>

<template>
    <NSpin :show="loading">
        <div v-if="!loading">
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
            <PracticeCard
                v-for="practice in practices"
                :key="practice.id"
                :practice="practice"
                small
                route="AdminPracticeEdit"
            />
        </div>
    </NSpin>
</template>

<style scoped lang="scss">
.header {
    display: flex;

    justify-content: space-between;
}
</style>
