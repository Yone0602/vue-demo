export default [
    {
        path: "/",
        name: "Problem1",
        component: () => import("../views/Problem1.vue")
    },
    {
        path: "/Product/List",
        name: "ProductList",
        component: () => import("../views/ProductList.vue")
    },
    {
        path: "/Problem3",
        name: "Problem3",
        component: () => import("../views/Problem3.vue")
    },
    {
        path: "/Child/Component",
        name: "ChildComponent",
        component: () => import("../views/Problem4/ParentComponent.vue")
    },
    {
        path: "/User/Management/Component",
        name: "UserManagementComponent",
        component: () => import("../views/Problem5/UserManagementComponent.vue")
    }
];
