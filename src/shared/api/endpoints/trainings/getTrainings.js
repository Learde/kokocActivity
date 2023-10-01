import makeHttpRequest from "../../makeHttpRequest";

export const getTrainings = async () => {
    const response = (
        await makeHttpRequest({
            url: "/training",
            method: "GET",
        })
    ).data;

    return response;
};
