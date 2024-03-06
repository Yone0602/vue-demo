<template>
    <div class="w-100% max-w-1200px mx-auto flex">
        <div class="w-100%" v-for="(item, index) in users">
            <CardComponent :user="item" :key="index" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CardComponent from "./CardComponent.vue";

let props = withDefaults(
    defineProps<{
        users: any[];
    }>(),
    {
        users: () => []
    }
);
</script>

<style scoped lang="scss"></style>
