import {
    ADMIN,
    OPERATION_ASSISTANT,
    PRODUCT_MANAGER,
    TAILOR,
} from "../constants";

const displayRoleName = (role) => {
    switch (role) {
        case ADMIN:
            return "Admin";
        case OPERATION_ASSISTANT:
            return "Operation Assistant";
        case PRODUCT_MANAGER:
            return "Product Manager";
        case TAILOR:
            return "Tailoring Supervisor";
        default:
            return "";
    }
};

export function capitalizeFirstLetter(string) {
    // Check if the string is not empty
    if (string.length > 0) {
        // Capitalize the first letter and convert the rest to lowercase
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    // Return an empty string for an empty input
    return string;
}

export default displayRoleName;