<script setup>
// const props = defineProps({
//     user: {
//         type: Object,
//         require: true,
//     },
// });
</script>

<template>
    <div class="user">
        <NAvatar round size="small" class="avatar" />
        <div class="text">
            <span class="place">1 место</span>
            <span class="name">Иван Баранов</span>
        </div>
    </div>
</template>

<style scopd lang="scss">
.user {
    display: flex;

    align-items: center;

    padding: 10px;
    margin-bottom: 10px;

    border: 1px solid var(--m-3-sys-light-surface-container, #f3edf7);
    border-radius: 10px;

    .avatar {
        margin-right: 16px;
    }

    .text {
        display: flex;

        flex-direction: column;

        .place {
            /* M3/label/medium */
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 16px; /* 133.333% */
            color: var(--m-3-sys-light-on-surface-variant, #49454f);
            letter-spacing: 0.5px;
        }

        .name {
            /* M3/body/large */
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
            color: var(--m-3-sys-light-on-surface, #1d1b20);
            letter-spacing: 0.5px;
        }
    }
}
</style>
