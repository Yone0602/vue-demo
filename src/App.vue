<template>
    <div>
        <div>
            <el-button type="primary" @click="routerTo('/')">问题1</el-button>
            <el-button type="primary" @click="routerTo('/Product/List')">问题2</el-button>
            <el-button type="primary" @click="routerTo('/Problem3')">问题3</el-button>
            <el-button type="primary" @click="routerTo('/Child/Component')">问题4</el-button>
            <el-button type="primary" @click="routerTo('/User/Management/Component')">问题5</el-button>
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
