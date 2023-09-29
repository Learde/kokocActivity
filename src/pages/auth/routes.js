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
                meta: { title: "Войти" },
                component: () => import("./LoginPage.vue"),
            },
            {
                path: "/registration/1",
                name: "RegistrationStep1",
                meta: { title: "Давайте познакомимся", step: 1 },
                component: () => import("./RegistrationStep1Page.vue"),
            },
        ],
    },
];
