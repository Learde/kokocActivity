import makeHttpRequest from "../../makeHttpRequest";

export const removeExercise = async (id) => {
    const response = (
        await makeHttpRequest({
            url: `/exercise/${id}`,
            method: "DELETE",
        })
    ).data;

    return response;
};
