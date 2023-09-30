import makeHttpRequest from "../../makeHttpRequest";

import { mapLoginDataToServer } from "./mappers";
export const login = async (admin) => {
    const response = (
        await makeHttpRequest({
            url: "/auth/login",
            method: "POST",
            data: mapLoginDataToServer(admin),
        })
    ).data;

    return { token: response.token, role: response.role };
};
