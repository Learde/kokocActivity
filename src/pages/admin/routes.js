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
                    steps: 5,
                    step: 1,
                    isDirectionColumn: true,
                },
                component: () => import("./AdminPracticeEditor.vue"),
            },
        ],
    },
    {
        path: "/admin/practice/add",
        name: "AdminPracticeAdd",
        component: () => import("./AdminPracticeEditor.vue"),
    },
    {
        path: "/admin/practice/edit/:id",
        name: "AdminPracticeEdit",
        props: true,
        component: () => import("./AdminPracticeEditor.vue"),
    },
    {
        path: "/admin/settings",
        name: "AdminSettings",
        component: () => import("./AdminSettings.vue"),
    },
    {
        path: "/admin/exercises",
        name: "AdminExercises",
        component: () => import("./AdminExercises.vue"),
    },
    {
        path: "/admin/exercise/add",
        name: "AdminExerciseAdd",
        component: () => import("./AdminExerciseEditor.vue"),
    },
    {
        path: "/admin/exercise/edit/:id",
        name: "AdminExerciseEdit",
        props: true,
        component: () => import("./AdminExerciseEditor.vue"),
    },
    {
        path: "/admin/trainings",
        name: "AdminTrainings",
        component: () => import("./AdminTrainings.vue"),
    },
    {
        path: "/admin/training/add",
        name: "AdminTrainingAdd",
        component: () => import("./AdminTrainingEditor.vue"),
    },
    {
        path: "/admin/training/edit/:id",
        name: "AdminTrainingEdit",
        props: true,
        component: () => import("./AdminTrainingEditor.vue"),
    },
    {
        path: "/admin/training/edit/:id/exercises",
        name: "AdminTrainingEditExercises",
        props: true,
        component: () => import("./AdminTrainingExercisePicker.vue"),
    },
    {
        path: "/admin/practice/edit/:id/trainings",
        name: "AdminPracticeEditTrainings",
        props: true,
        component: () => import("./AdminPracticeTrainingsPicker.vue"),
    },
];
