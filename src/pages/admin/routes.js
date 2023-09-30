/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
    {
        path: "/admin/practices",
        name: "AdminPractices",
        component: () => import("./AdminPractices.vue"),
    },
    {
        path: "/admin/practices/add",
        name: "AdminPracticesAdd",
    },
];
