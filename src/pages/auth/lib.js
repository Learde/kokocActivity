const isEmailValid = (value) => {
    return String(value)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export const getEmailValidationStatus = (value) => {
    return isEmailValid(value) ? undefined : "error";
};

export const getEmailValidationFeedback = (value) => {
    return isEmailValid(value) ? "" : "Неправильный формат почты";
};
