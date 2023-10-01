import makeHttpRequest from "../../makeHttpRequest";

export const removePractice = async (id) => {
    const response = (
        await makeHttpRequest({
            url: `/courses/${id}`,
            method: "DELETE",
        })
    ).data;

    return response;
};
