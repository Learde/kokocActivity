<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const props = defineProps({
    showBack: {
        type: Boolean,
        default: true,
    },
    hasContentPT: {
        type: Boolean,
        default: true,
    },
    noBackground: {
        type: Boolean,
        default: false,
    },
    isDirectionColumn: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        default: "",
    },
    contentClass: {
        type: String,
        default: "",
    },
});

const router = useRouter();
const route = useRoute();

const goBack = () => {
    router.go(-1);
};

const hasBackground = computed(() => {
    return !(route.meta.noBackground ?? props.noBackground);
});

const isColumn = computed(() => {
    return route.meta.isDirectionColumn ?? props.isDirectionColumn;
});

const hasTitle = computed(() => {
    return Boolean(route.meta.title ?? props.title);
});
</script>

<template>
    <div class="back-template">
        <div
            class="top-menu"
            :class="{
                'top-menu-bgc': hasBackground,
                'top-menu-column': isColumn,
            }"
        >
            <div v-if="props.showBack" class="top-menu-arrow">
                <span class="arrow" @click="goBack">&larr;</span>
            </div>
            <NH3 v-if="hasTitle" class="roboto-flex">
                {{ route.meta.title ?? title }}
            </NH3>
            <slot name="action" />
        </div>
        <div
            class="content"
            :class="{ 'content-pt': hasContentPT, contentClass }"
        >
            <slot>
                <RouterView />
            </slot>
        </div>
        <slot name="footer" />
    </div>
</template>

<style scoped>
.back-template {
    display: flex;

    flex-direction: column;

    height: 100%;
}

.top-menu {
    display: flex;

    gap: 20px;

    align-items: center;

    padding: 8px 16px;
    margin: -16px -16px 0;
}

.top-menu-column {
    flex-direction: column;

    gap: 0;

    align-items: flex-start;

    padding-bottom: 24px;
}

.top-menu-bgc {
    background-color: #fef7ff;
}

.top-menu-arrow {
    display: flex;

    align-items: center;

    height: 48px;

    font-size: 20px;
}

.arrow {
    cursor: pointer;
}

.content {
    height: 100%;
}

.content-pt {
    padding-top: 16px;
}
</style>
