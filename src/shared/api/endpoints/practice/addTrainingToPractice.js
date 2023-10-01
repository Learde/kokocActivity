import makeHttpRequest from "../../makeHttpRequest";

export const addTrainingToPractice = async (idPractice, idTraining) => {
    const response = (
        await makeHttpRequest({
            url: "/courses/add",
            method: "POST",
            data: {
                trainingId: idTraining,
                practiceId: idPractice,
            },
        })
    ).data;

    return response;
};
