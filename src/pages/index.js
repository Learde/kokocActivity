import { adminRoutes } from "./admin";
import { authRoutes } from "./auth";
import { mainRoutes } from "./main";
import { practicesRoutes } from "./practices";
import { ratingRoutes } from "./rating";
import { shopRoutes } from "./shop";
import { summaryRoutes } from "./summary";
import { userRoutes } from "./user";

export const routes = [
    ...adminRoutes,
    ...mainRoutes,
    ...userRoutes,
    ...authRoutes,
    ...practicesRoutes,
    ...summaryRoutes,
    ...ratingRoutes,
    ...shopRoutes,
];

export { authRouteNames } from "./auth";
