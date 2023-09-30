<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const props = defineProps({
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
            <div class="top-menu-arrow">
                <span class="arrow" @click="goBack">&larr;</span>
            </div>
            <NH3 v-if="hasTitle">
                {{ route.meta.title ?? title }}
            </NH3>
        </div>
        <div class="content">
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
    padding-top: 20px;
}
</style>
