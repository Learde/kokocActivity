/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
    {
        name: "practices",
        path: "/practices",
        component: import("./PracticesPage.vue"),
    },
    {
        path: "/practice/card/:id",
        name: "practice-card",
        component: () => import("./PracticeCardPage.vue"),
    },
    {
        path: "/practice/fund/:id",
        name: "practice-fund",
        component: () => import("./PracticeFund.vue"),
    },
    {
        path: "/practice/calendar/:id",
        name: "practice-calendar",
        component: () => import("./PracticeCalendar.vue"),
    },
];
