import makeHttpRequest from "../../makeHttpRequest";

export const addPractice = async (data) => {
    const response = (
        await makeHttpRequest({
            url: "/courses",
            method: "POST",
            data,
        })
    ).data;

    return response;
};
