import makeHttpRequest from "../../makeHttpRequest";

export const getRating = async (type) => {
    const response = (
        await makeHttpRequest({
            url: `/statistics/${type}`,
            method: "GET",
        })
    ).data;

    return response;
};
