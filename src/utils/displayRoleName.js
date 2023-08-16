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

export default displayRoleName;