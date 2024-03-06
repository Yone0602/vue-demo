<template>
    <div class="page">
        <ChildComponent :users="users" />
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

onMounted(() => {
    getUsers();
});

let users = ref<any[]>([]);

let getUsers = () => {
    users.value = apiList.data;
};

let apiList = {
    status: "success",
    data: [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            role: "admin",
            createdAt: "2023-01-01T00:00:00Z"
        },
        {
            id: 2,
            name: "Alan Walker",
            email: "Alan Walker@example.com",
            role: "admin",
            createdAt: "2023-01-02T00:00:00Z"
        }
    ]
};
</script>

<style scoped lang="scss"></style>
