<script setup>
import { NConfigProvider } from "naive-ui";
import { RouterView } from "vue-router";

import { TheHeader, useAuthStore } from "@/modules";

import { naiveConfig } from "./naiveConfig";

const authStore = useAuthStore();
</script>

<template>
    <NConfigProvider :theme-overrides="naiveConfig">
        <RouterView />
        <TheHeader v-if="authStore.isAuthenticated" />
    </NConfigProvider>
</template>
