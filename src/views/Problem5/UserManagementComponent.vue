<template>
    <div class="page">
        <div class="w-1200px mx-auto mt-30px">
            <el-table
                :data="list.data"
                style="width: 100%"
                :border="true"
                :default-sort="{ prop: 'registrationDate', order: 'descending' }"
            >
                <el-table-column prop="username" label="用户名" width="160" />
                <el-table-column prop="email" label="邮箱" width="260" />
                <el-table-column label="注册日期" sortable>
                    <template #default="scope">
                        {{ dayjs(scope.row.registrationDate).format("YYYY-MM-DD HH:mm:ss") }}
                    </template>
                </el-table-column>
                <el-table-column fixed="right" label="Operations" width="180px">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { ElMessage, ElMessageBox } from "element-plus";

interface User {
    date: string;
    name: string;
    address: string;
}

let list = {
    status: "success",
    data: [
        {
            _id: "61f7c9e68d2fa1b8d4a2a9f0",
            username: "John Doe",
            email: "john.doe@example.com",
            registrationDate: "2022-01-01T00:00:00Z",
            status: { code: 1, description: "Active" }
        },
        {
            _id: "61f7c9e68d2fa1b8d5a3a9f0",
            username: "Kyrie Irving",
            email: "Kyrie.Irving@example.com",
            registrationDate: "2022-03-23T00:00:00Z",
            status: { code: 1, description: "Active" }
        },
        {
            _id: "61f7c9e68d2fa1b8d6a3a9f0",
            username: "Alan Walker",
            email: "Alan.Walker@example.com",
            registrationDate: "2022-01-11T00:00:00Z",
            status: { code: 1, description: "Active" }
        }
    ]
};

let handleEdit = (index: number, row: any) => {
    console.log("Edit", index, row);
};

//打开是否删除弹窗
let handleDelete = (index: number, row: any) => {
    ElMessageBox.confirm(`即将删除${row.username}，该操作不可逆`, "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
    }).then(() => {
        // 调用接口
        ElMessage({
            type: "success",
            message: "删除成功！"
        });
    });
};
</script>

<style scoped lang="scss"></style>
