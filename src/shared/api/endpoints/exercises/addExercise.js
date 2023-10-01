import makeHttpRequest from "../../makeHttpRequest";

export const addExercise = async (data) => {
    const response = (
        await makeHttpRequest({
            url: "/exercise",
            method: "POST",
            data,
        })
    ).data;

    return response;
};
