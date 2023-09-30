<script setup>
const props = defineProps({
    user: {
        type: Object,
        default: () => {
            return {};
        },
    },
    type: {
        type: String,
        default: "",
    },
});

const variants = {
    money: "Купюры 💸",
    calories: "Калории 🔥",
    averageTime: "Время ⌛",
    averageDonat: "Донат 🪙",
};
</script>

<template>
    <div class="user">
        <div class="main-block">
            <NAvatar round size="small" class="avatar" />
            <div class="text">
                <span class="place">1 место</span>
                <span class="name">Иван Баранов</span>
            </div>
        </div>
        <div v-if="props.type">
            <div class="info-item">
                <span class="name"> {{ variants[type] }}</span>
                <span class="value"> 200 шт. </span>
            </div>
        </div>
    </div>
</template>

<style scopd lang="scss">
.user {
    display: flex;

    align-items: center;
    justify-content: space-between;

    padding: 10px;
    margin-bottom: 10px;

    border: 1px solid var(--m-3-sys-light-surface-container, #f3edf7);
    border-radius: 10px;

    .main-block {
        display: flex;

        align-items: center;
    }

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
            letter-spacing: 0.5px;
        }

        .name {
            /* M3/body/large */
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
            letter-spacing: 0.5px;
        }
    }

    .info-item {
        display: flex;

        flex-direction: column;

        align-items: center;
        justify-content: center;

        .name {
            font-size: 11px;
            font-style: normal;
            font-weight: 500;
            line-height: 16px; /* 145.455% */
            letter-spacing: 0.5px;
        }

        .value {
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 16px; /* 133.333% */
            letter-spacing: 0.5px;
        }
    }
}
</style>
