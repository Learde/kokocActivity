import makeHttpRequest from "../../makeHttpRequest";

export const editExercise = async (id, data) => {
    const response = (
        await makeHttpRequest({
            url: `/exercise/${id}`,
            method: "PUT",
            data,
        })
    ).data;

    return response;
};
