import { adminRoutes } from "./admin";
import { authRoutes } from "./auth";
import { mainRoutes } from "./main";
import { userRoutes } from "./user";

export const routes = [
    ...adminRoutes,
    ...mainRoutes,
    ...userRoutes,
    ...authRoutes,
];
