import makeHttpRequest from "../../makeHttpRequest";

export const getPractices = async () => {
    const response = (
        await makeHttpRequest({
            url: "/courses",
            method: "GET",
        })
    ).data;

    return response;
};

export const getPractice = async (id) => {
    const response = (
        await makeHttpRequest({
            url: `/courses/${id}`,
            method: "GET",
        })
    ).data;

    return response;
};
