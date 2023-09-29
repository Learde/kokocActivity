<script setup>
import { NConfigProvider } from "naive-ui";
import { RouterView } from "vue-router";

import { TheHeader, useAuthStore, TheMain } from "@/modules";

import { naiveConfig } from "./naiveConfig";

const authStore = useAuthStore();
</script>

<template>
    <NConfigProvider :theme-overrides="naiveConfig">
        <TheMain>
            <RouterView />
        </TheMain>
        <TheHeader v-if="authStore.isAuthenticated" />
    </NConfigProvider>
</template>
