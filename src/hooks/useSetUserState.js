import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux"

import { setUser, setUserObject } from "../store/slices/authSlice";

const useSetUserState = () => {
    const dispatch = useDispatch();

    const setUserDataFromToken = () => {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            const decodedJWT = jwtDecode(accessToken);
            const user = setUserObject(decodedJWT.user);
            dispatch(setUser(user));
        }
    };

    return setUserDataFromToken;
};

export default useSetUserState;
