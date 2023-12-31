// jobs
export { getJobs } from "./jobs/getJobs";
export { createJob } from "./jobs/createJob";
export { editJob } from "./jobs/editJob";
export { deleteJob } from "./jobs/deleteJob";
export { closeJob } from "./jobs/closeJob";

// tests
export { createTest } from "./tests/createTest";
export { getTests } from "./tests/getTests";
export { editTest } from "./tests/editTest";
export { deleteTest } from "./tests/deleteTest";

// profile
export { getProfile } from "./user/getProfile";
export { changeProfile } from "./user/changeProfile";

// auth
export { registerUser } from "./auth/registerUser";
export { registerAdmin } from "./auth/registerAdmin";
export { registerFund } from "./auth/registerFund";
export { registerDepartment } from "./auth/registerDepartment";
export { login } from "./auth/login";

// exercises
export { getExercises } from "./exercises/getExercises";
export { addExercise } from "./exercises/addExercise";
export { removeExercise } from "./exercises/removeExercise";
export { editExercise } from "./exercises/editExercise";
export { getExercise } from "./exercises/getExercise";

// trainings
export { getTrainings } from "./trainings/getTrainings";
export { addTraining } from "./trainings/addTraining";
export { removeTraining } from "./trainings/removeTraining";
export { editTraining } from "./trainings/editTraining";
export { getTraining } from "./trainings/getTraining";
export { addExerciseToTraining } from "./trainings/addExerciseToTraining";

// practice
export { getPractices } from "./practice/practice";
export { getPractice } from "./practice/practice";
export { confirmPractice } from "./practice/practice";
export { addPractice } from "./practice/addPractice";
export { editPractice } from "./practice/editPractice";
export { removePractice } from "./practice/removePractice";
export { addTrainingToPractice } from "./practice/addTrainingToPractice";
export { getUserPractices } from "./practice/practice";

// funds
export { getFundes } from "./fundes/fundes";

//rating
export { getRating } from "./rating/rating";
