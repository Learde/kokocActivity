import makeHttpRequest from "../../makeHttpRequest";

export const getPractices = async (admin) => {
    const response = (
        await makeHttpRequest({
            url: "/courses",
            method: "GET",
            data: admin,
        })
    ).data;

    console.log(response);

    return response;
};
