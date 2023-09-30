<script setup>
import { UserCard } from "@/components";
</script>

<template>
    <div class="rating-page">
        <div class="header">
            <div class="btn-back"></div>
            <span>Рейтинг</span>
        </div>
        <div class="list">
            <NH2>ТОп-10</NH2>
            <div class="nav-menu"></div>
            <div class="users">
                <UserCard />
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
            <span>Среднее время тренировок в день</span>
            <NH2>1 час</NH2>
        </div>
        <div class="info">
            <span>Средняя сумма доната в день</span>
            <NH2>200 купюр</NH2>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
