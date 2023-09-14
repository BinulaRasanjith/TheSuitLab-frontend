const isValidMobileNo = (number) => {
    // Check if the input contains non-numeric characters
    if (!/^\d+$/.test(number)) {
        return { valid: false, msg: "Mobile number must contain only numbers" };
    }

    // Check if the cleaned input matches the desired format
    const regex = /^07\d{8}$/;
    return { valid: regex.test(number), msg: "Mobile number must be in the format 07xxxxxxxx" };
};

export default isValidMobileNo;