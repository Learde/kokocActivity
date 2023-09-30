import makeHttpRequest from "../../makeHttpRequest";

import { mapUserToServer } from "./mappers";
export const registerUser = async (user) => {
    const response = (
        await makeHttpRequest({
            url: "/auth/register/user",
            method: "POST",
            data: mapUserToServer(user),
        })
    ).data;

    return response.token;
};
