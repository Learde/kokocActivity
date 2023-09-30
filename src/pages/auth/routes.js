/* eslint-disable node/no-unsupported-features/es-syntax */
import { isArray } from "@/shared";
export const routes = [
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
                path: "/registration",
                name: "Registration",
                meta: { title: "Выбор роли", isDirectionColumn: true },
                component: () => import("./RegistrationSelectRole.vue"),
            },
            {
                path: "/registration/user/1",
                name: "RegistrationUserStep1",
                meta: {
                    title: "Давайте познакомимся",
                    step: 1,
                    steps: 4,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationUserStep1.vue"),
            },
            {
                path: "/registration/user/2",
                name: "RegistrationUserStep2",
                meta: {
                    title: "Введите ваши параметры",
                    step: 2,
                    steps: 4,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationUserStep2.vue"),
            },
            {
                path: "/registration/user/3",
                name: "RegistrationUserStep3",
                meta: {
                    title: "Выберите департамент",
                    step: 3,
                    steps: 4,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationUserStep3.vue"),
            },
            {
                path: "/registration/user/4",
                name: "RegistrationUserStep4",
                meta: {
                    noBackground: true,
                    step: 4,
                    steps: 4,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationUserStep4.vue"),
            },
            {
                path: "/registration/admin/1",
                name: "RegistrationAdminStep1",
                meta: {
                    title: "Давайте познакомимся",
                    step: 1,
                    steps: 2,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationAdminStep1.vue"),
            },
            {
                path: "/registration/admin/2",
                name: "RegistrationAdminStep2",
                meta: {
                    noBackground: true,
                    step: 2,
                    steps: 2,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationAdminStep2.vue"),
            },
            {
                path: "/registration/fund/1",
                name: "RegistrationFundStep1",
                meta: {
                    title: "Давайте познакомимся",
                    step: 1,
                    steps: 3,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationFundStep1.vue"),
            },
            {
                path: "/registration/fund/2",
                name: "RegistrationFundStep2",
                meta: {
                    title: "Описание вашего фонда",
                    step: 2,
                    steps: 3,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationFundStep2.vue"),
            },
            {
                path: "/registration/fund/3",
                name: "RegistrationFundStep3",
                meta: {
                    noBackground: true,
                    step: 3,
                    steps: 3,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationFundStep3.vue"),
            },
            {
                path: "/registration/department/1",
                name: "RegistrationDepartmentStep1",
                meta: {
                    title: "Давайте познакомимся",
                    step: 1,
                    steps: 3,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationDepartmentStep1.vue"),
            },
            {
                path: "/registration/department/2",
                name: "RegistrationDepartmentStep2",
                meta: {
                    title: "Описание вашего департамента",
                    step: 2,
                    steps: 3,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationDepartmentStep2.vue"),
            },
            {
                path: "/registration/department/3",
                name: "RegistrationDepartmentStep3",
                meta: {
                    noBackground: true,
                    step: 3,
                    steps: 3,
                    isDirectionColumn: true,
                },
                component: () => import("./RegistrationDepartmentStep3.vue"),
            },
        ],
    },
];

const fillRouteNames = (names, targetRoutes) => {
    targetRoutes.forEach((route) => {
        names.push(route.name);

        if (isArray(route.children)) fillRouteNames(names, route.children);
    });
};

const authRouteNames = [];

fillRouteNames(authRouteNames, routes);

export { authRouteNames };
