import makeHttpRequest from "../../makeHttpRequest";

import { mapDepartmentToServer } from "./mappers";
export const registerDepartment = async (fund) => {
    const response = (
        await makeHttpRequest({
            url: "/auth/register/dephead",
            method: "POST",
            data: mapDepartmentToServer(fund),
        })
    ).data;

    return response.token;
};
