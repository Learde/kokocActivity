import makeHttpRequest from "../../makeHttpRequest";

export const editPractice = async (id, data) => {
    const response = (
        await makeHttpRequest({
            url: `/courses/${id}`,
            method: "PUT",
            data,
        })
    ).data;

    return response;
};
