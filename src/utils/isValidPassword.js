export const isPasswordLengthValid = (password) => {
    return password.length >= 8;
};

export const containsLowercaseLetter = (password) => {
    return /[a-z]/.test(password);
};

export const containsUppercaseLetter = (password) => {
    return /[A-Z]/.test(password);
};

export const containsDigit = (password) => {
    return /\d/.test(password);
};

export const containsSpecialCharacter = (password) => {
    return /[!@#$%^&*]/.test(password);
};
