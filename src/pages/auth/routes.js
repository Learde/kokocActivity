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
                component: () => import("./LoginPage.vue"),
            },
            {
                path: "/registration",
                name: "Registration",
                component: () => import("./RegistrationPage.vue"),
            },
        ],
    },
];
