<script setup lang="ts">
import ActivitySettings from "@/components/ActivityBar/ActivitySettings.vue";
import ActivityPanel from "@/components/Panels/ActivityPanel.vue";
</script>

<template>
    <ActivityPanel title="Settings" :go-to-all-title="localize('User Preferences')" href="/user">
        <h3 v-localize>Customize Activity Bar</h3>
        <ActivitySettings />
    </ActivityPanel>
</template>
