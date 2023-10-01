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

export const getUserPractices = async () => {
    const response = (
        await makeHttpRequest({
            url: "/courses/user",
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

export const confirmPractice = async (params) => {
    const response = await makeHttpRequest({
        url: `/courses/attach/${params.courseId}`,
        method: "post",
        data: params,
    });

    return response;
};
