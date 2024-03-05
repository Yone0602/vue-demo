<template>
    <div>
        <div>
            <el-button type="primary" @click="routerTo('/')">问题1</el-button>
            <el-button type="primary" @click="routerTo('/problem2')">问题2</el-button>
            <el-button type="primary" @click="routerTo('/problem3')">问题3</el-button>
        </div>
        <router-view />
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

let $router = useRouter();

let routerTo = (path: string) => {
    $router.push(path);
};
</script>
