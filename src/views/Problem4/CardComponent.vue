<template>
    <div class="px-10px">
        <div class="mt-30">
            <el-card>
                <template #header>
                    <div class="card-header">
                        <div>姓名：{{ user.name }}</div>
                    </div>
                </template>
                <div>角色：{{ user.role }}</div>
                <div>邮箱：{{ user.email }}</div>
                <template #footer>
                    <el-button type="primary">更新用户</el-button>
                </template>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
let props = withDefaults(
    defineProps<{
        user: any;
    }>(),
    {
        user: () => {}
    }
);
</script>

<style scoped lang="scss"></style>
