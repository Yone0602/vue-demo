<template>
    <div class="page w-1200px my-50px mx-auto">
        <el-table :data="list.data" style="width: 100%" :border="true" sortable>
            <el-table-column prop="groupId" label="分组ID" width="100" />
            <el-table-column prop="groupName" label="分组名" width="150" />
            <el-table-column label="用户列表">
                <template v-slot="{ row }">
                    <el-table :data="row.users" style="width: 100%">
                        <el-table-column prop="id" label="用户ID" width="100" />
                        <el-table-column prop="name" label="用户名" width="150" />
                        <el-table-column prop="email" label="邮箱" width="260" />
                        <el-table-column prop="role" label="角色" width="150" />
                        <el-table-column label="创建时间" width="260">
                            <template #default="scope">
                                {{ dayjs(scope.row.createdAt).format("YYYY-MM-DD HH:mm:ss") }}
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";

let list = {
    status: "success",
    data: [
        {
            groupId: 1,
            groupName: "Admin Group",
            description: "Description for Product 1",
            users: [
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
        },
        {
            groupId: 2,
            groupName: "User Group",
            description: "Description for Product 1",
            users: [
                {
                    id: 3,
                    name: "Kyrie Irving",
                    email: "Kyrie Irving@example.com",
                    role: "Boss",
                    createdAt: "2023-03-23T00:00:00Z"
                }
            ]
        }
    ]
};
</script>

<style scoped lang="scss"></style>
