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
        component: () => import("@/components/templates/StepsTemplate.vue"),
        children: [
            {
                path: "/1",
                name: "AdminPracticesAddStep1",
                meta: {
                    title: "Придумайте название курса",
                    steps: 4,
                    step: 1,
                    isDirectionColumn: true,
                },
                component: () => import("./AdminPracticesAddStep1.vue"),
            },
        ],
    },
];
