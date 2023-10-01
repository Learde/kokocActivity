<script setup>
import { NConfigProvider } from "naive-ui";
import { RouterView } from "vue-router";

import { TheFooter, TheMain, useAuthStore, useUserStore } from "@/modules";

import { naiveConfig } from "./naiveConfig";

const authStore = useAuthStore();
const userStore = useUserStore();
</script>

<template>
    <NNotificationProvider>
        <NMessageProvider>
            <NDialogProvider>
                <NConfigProvider :theme-overrides="naiveConfig">
                    <TheMain :has-footer="authStore.isAuthenticated">
                        <RouterView />
                    </TheMain>
                    <TheFooter
                        v-if="authStore.isAuthenticated"
                        :is-admin="userStore.role === 'admin'"
                    />
                </NConfigProvider>
            </NDialogProvider>
        </NMessageProvider>
    </NNotificationProvider>
</template>
