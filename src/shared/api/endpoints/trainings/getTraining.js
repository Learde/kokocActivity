import makeHttpRequest from "../../makeHttpRequest";

export const getTraining = async (id) => {
    const response = (
        await makeHttpRequest({
            url: `/training/${id}`,
            method: "GET",
        })
    ).data;

    return response;
};
