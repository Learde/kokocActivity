import makeHttpRequest from "../../makeHttpRequest";

import { mapFundToServer } from "./mappers";
export const registerFund = async (fund) => {
    const response = (
        await makeHttpRequest({
            url: "/auth/register/fundagent",
            method: "POST",
            data: mapFundToServer(fund),
        })
    ).data;

    return response.token;
};
