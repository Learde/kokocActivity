/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
    {
        path: "/welcome",
        name: "Welcome",
        component: () => import("./WelcomePage.vue"),
    },
    {
        path: "/auth",
        name: "Auth",
        component: () => import("./AuthTemplate.vue"),
        children: [
            {
                path: "/login",
                name: "Login",
                meta: { title: "Войти", isDirectionColumn: true },
                component: () => import("./LoginPage.vue"),
            },
            {
                path: "/registration/1",
                name: "RegistrationStep1",
                meta: {
                    title: "Давайте познакомимся",
                    step: 1,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationStep1Page.vue"),
            },
            {
                path: "/registration/2",
                name: "RegistrationStep2",
                meta: {
                    title: "Введите ваши параметры",
                    step: 2,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationStep2Page.vue"),
            },
            {
                path: "/registration/3",
                name: "RegistrationStep3",
                meta: { noBackground: true, step: 3, isDirectionColumn: true },
                component: () => import("./RegistrationStep3Page.vue"),
            },
        ],
    },
];
