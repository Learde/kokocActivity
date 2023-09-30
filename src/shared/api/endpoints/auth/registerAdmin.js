import makeHttpRequest from "../../makeHttpRequest";

import { mapAdminToServer } from "./mappers";
export const registerAdmin = async (admin) => {
    const response = (
        await makeHttpRequest({
            url: "/auth/register/admin",
            method: "POST",
            data: mapAdminToServer(admin),
        })
    ).data;

    return response.token;
};
