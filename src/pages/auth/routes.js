/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
    {
        path: "/admin/auth",
        name: "AuthPage",
        redirect: "/admin/auth/login",
        component: () => import("./AuthPage.vue"),
        children: [
            {
                path: "login",
                name: "LoginPage",
                component: () => import("./LoginPage.vue"),
            },
            {
                path: "registration",
                name: "RegistrationPage",
                component: () => import("./RegistrationPage.vue"),
            },
        ],
    },
];
