import makeHttpRequest from "../../makeHttpRequest";

export const getExercises = async () => {
    const response = (
        await makeHttpRequest({
            url: "/exercise",
            method: "GET",
        })
    ).data;

    return response;
};
