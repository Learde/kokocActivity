import makeHttpRequest from "../../makeHttpRequest";

export const addTraining = async (data) => {
    const response = (
        await makeHttpRequest({
            url: "/training",
            method: "POST",
            data,
        })
    ).data;

    return response;
};
