<script setup>
import { ref } from "vue";

import { UserCard, BackTemplate } from "@/components";

const tabs = [
    {
        name: "money",
        tab: "Заработанные деньги",
    },
    {
        name: "calories",
        tab: "Сожженые калории",
    },
    {
        name: "averageTime",
        tab: "Среднее время тренировок",
    },
    {
        name: "averageDonat",
        tab: "Средний донат",
    },
];

const currentTab = ref("money");
</script>

<template>
    <BackTemplate title="Рейтинг" noBackground>
        <div class="rating-page">
            <div class="list">
                <NH2 class="title roboto-flex">Топ-10</NH2>
                <div class="nav-menu">
                    <NTabs
                        type="line"
                        justify-content="center"
                        defa
                        animated
                        :value="tabs.find((el) => el.name === currentTab.value)"
                        :on-update:value="(val) => (currentTab = val)"
                    >
                        <NTabPane
                            v-for="tab in tabs"
                            :key="tab.name"
                            :name="tab.name"
                            :tab="tab.tab"
                        >
                            <RouterView></RouterView>
                        </NTabPane>
                    </NTabs>
                </div>
                <div class="users">
                    <UserCard :type="currentTab" />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                </div>
            </div>
            <div class="info">
                <span class="title roboto-flex"
                    >Среднее время тренировок в день</span
                >
                <NH2 class="text roboto-flex">1 час</NH2>
            </div>
            <div class="info">
                <span class="title roboto-flex"
                    >Средняя сумма доната в день</span
                >
                <NH2 class="text roboto-flex">200 купюр</NH2>
            </div>
        </div>
    </BackTemplate>
</template>

<style scoped lang="scss">
.list {
    .title {
        /* Title/H3 */
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        line-height: 120%; /* 24px */
        color: #000;
    }

    .nav-menu {
        margin-top: 8px;
    }
}

.info {
    padding: 16px 0;

    .title {
        /* Title/H4 */
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: 120%; /* 19.2px */
        color: #000;

        opacity: 0.5;
    }

    .text {
        /* Title/H2 */
        font-size: 24px;
        font-style: normal;
        font-weight: 800;
        line-height: 120%; /* 28.8px */
        color: #000;
    }
}
</style>
