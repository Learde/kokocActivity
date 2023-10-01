import makeHttpRequest from "../../makeHttpRequest";

export const addExerciseToTraining = async (idTraining, idExercise) => {
    const response = (
        await makeHttpRequest({
            url: "/training/add",
            method: "POST",
            data: {
                trainingId: idTraining,
                exerciseId: idExercise,
            },
        })
    ).data;

    return response;
};
