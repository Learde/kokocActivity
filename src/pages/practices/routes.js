/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
    {
        name: "practices",
        path: "/practices",
        component: import("./PracticesPage.vue"),
    },
    {
        path: "/card/:id",
        name: "practice-card",
        component: () => import("./PracticeCardPage.vue"),
    },
];
