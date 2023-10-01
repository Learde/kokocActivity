import makeHttpRequest from "../../makeHttpRequest";

export const editTraining = async (id, data) => {
    const response = (
        await makeHttpRequest({
            url: `/training/${id}`,
            method: "PUT",
            data,
        })
    ).data;

    return response;
};
