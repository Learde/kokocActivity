<script setup>
import { NConfigProvider } from "naive-ui";
import { RouterView } from "vue-router";

import { TheFooter, TheMain, useAuthStore } from "@/modules";

import { naiveConfig } from "./naiveConfig";

const authStore = useAuthStore();
</script>

<template>
    <NMessageProvider>
        <NDialogProvider>
            <NConfigProvider :theme-overrides="naiveConfig">
                <TheMain :has-footer="authStore.isAuthenticated">
                    <RouterView />
                </TheMain>
                <TheFooter v-if="authStore.isAuthenticated" />
            </NConfigProvider>
        </NDialogProvider>
    </NMessageProvider>
</template>
