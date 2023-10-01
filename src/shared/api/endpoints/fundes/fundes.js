import makeHttpRequest from "../../makeHttpRequest";

export const getFundes = async () => {
    const response = (
        await makeHttpRequest({
            url: "/fund",
            method: "GET",
        })
    ).data;

    return response;
};
