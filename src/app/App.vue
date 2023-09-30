<script setup>
import { NConfigProvider } from "naive-ui";
import { RouterView } from "vue-router";

import { TheFooter, TheMain } from "@/modules";

import { naiveConfig } from "./naiveConfig";

// const authStore = useAuthStore();
</script>

<template>
    <NConfigProvider :theme-overrides="naiveConfig">
        <TheMain>
            <RouterView />
        </TheMain>
        <TheFooter />
    </NConfigProvider>
</template>
