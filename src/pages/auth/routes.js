/* eslint-disable node/no-unsupported-features/es-syntax */
export default [
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
    {
        path: "/welcome",
        name: "Welcome",
        component: () => import("./WelcomePage.vue"),
    },
];
