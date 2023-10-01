import makeHttpRequest from "../../makeHttpRequest";

export const getExercise = async (id) => {
    const response = (
        await makeHttpRequest({
            url: `/exercise/${id}`,
            method: "GET",
        })
    ).data;

    return response;
};
