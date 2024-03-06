<template>
    <div class="page py-20px">
        <div class="container w-1200px my-0 mx-auto">
            <div class="content shadow p-20px bg-#fff mt-50px" v-for="product in list.data" :key="product.id">
                <div>
                    <h2>平均评分：{{ average }}</h2>
                    <h2>产品名：{{ product.name }}</h2>
                    <div class="flex">
                        <div class="w-200px h-160rpx ml-15px first:ml-0" v-for="image in product.images" :key="image">
                            <img class="w-200px h-140px" :src="image" alt="product image" />
                        </div>
                    </div>
                    <div class="flex">
                        <div class="mr-600px">
                            <p>产品描述：{{ product.description }}</p>
                            <p>价格：{{ product.price }}</p>
                            <p>类别名称：{{ product.category.name }}</p>
                        </div>
                        <div v-for="review in product.reviews" :key="review.id">
                            <p>评分：{{ review.rating }}</p>
                            <p>评论：{{ review.comment }}</p>
                            <p>用户：{{ review.author }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

let list = {
    status: "success",
    data: [
        {
            id: 1,
            name: "Product 1",
            description: "Description for Product 1",
            price: 99.99,
            category: {
                id: 1,
                name: "Electronics"
            },
            images: [
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
            ],
            reviews: [
                {
                    id: 1,
                    rating: 4,
                    comment: "Great product!",
                    author: "John Doe"
                }
            ]
        },
        {
            id: 1,
            name: "Product 1",
            description: "Description for Product 1",
            price: 99.99,
            category: {
                id: 1,
                name: "Electronics"
            },
            images: [
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
                "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
            ],
            reviews: [
                {
                    id: 1,
                    rating: 3,
                    comment: "Great product!",
                    author: "John Doe"
                }
            ]
        }
    ]
};

// 获取平均分
let average = ref(0);

let getAverageRating = () => {
    let sum = 0;
    list.data.forEach((product) => {
        product.reviews.forEach((review) => {
            sum += review.rating;
        });
    });
    average.value = sum / (list.data.length * list.data[0].reviews.length);
};

onMounted(() => {
    getAverageRating();
});
</script>

<style scoped lang="scss"></style>
