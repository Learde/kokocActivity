<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

defineProps({
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

console.log(route);

const goTo = (name) => {
    router.push({ name });
};
</script>

<template>
    <div class="footer-menu">
        <div
            class="block"
            :class="{ selected: route.name === 'summary' }"
            @click="goTo('summary')"
        >
            <img class="mini-img" src="/src/shared/images/star.svg" />
            <span>Сводка</span>
        </div>
        <div
            class="block"
            :class="{
                selected:
                    route.name === 'AdminPractices' ||
                    route.name === 'practices' ||
                    route.name === 'practice',
            }"
            @click="goTo(isAdmin ? 'AdminPractices' : 'practices')"
        >
            <img class="mini-img" src="/src/shared/images/list.svg" />
            <span> Курсы </span>
        </div>

        <div
            v-if="isAdmin"
            :class="{ selected: route.name === 'AdminSettings' }"
            class="block"
            @click="goTo('AdminSettings')"
        >
            <img class="mini-img" src="/src/shared/images/admin.svg" />
            <span> Управление </span>
        </div>
        <div
            v-else
            class="block"
            :class="{ selected: route.name === 'shop' }"
            @click="goTo('shop')"
        >
            <img class="mini-img" src="/src/shared/images/shop.svg" />
            <span> Магазин </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer-menu {
    position: fixed;
    bottom: 0;

    z-index: 999999999;

    display: grid;

    grid-template-columns: 1fr 1fr 1fr;

    width: 100%;
    height: 80px;

    background: var(--m-3-sys-light-surface-container, #f3edf7);

    .block {
        display: flex;

        flex-direction: column;

        align-items: center;
        justify-content: center;

        cursor: pointer;
    }

    .selected {
        background: var(--m-3-sys-light-secondary-container, #b5f63c);
    }
}
</style>
