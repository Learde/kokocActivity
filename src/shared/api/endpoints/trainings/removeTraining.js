import makeHttpRequest from "../../makeHttpRequest";

export const removeTraining = async (id) => {
    const response = (
        await makeHttpRequest({
            url: `/training/${id}`,
            method: "DELETE",
        })
    ).data;

    return response;
};
