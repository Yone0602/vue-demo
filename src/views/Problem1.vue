<template>
    <div class="container">
        <div class="content" v-for="index in 20">{{ index }}</div>
    </div>
</template>

<style>
.container {
    width: 500px;
    max-height: 80vh;
    background-color: lightgray;
    margin: 50px auto;
    overflow-y: auto;
}

.content {
    padding: 10px;
    transition: height 0.5s;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
</style>
<script setup lang="ts"></script>
