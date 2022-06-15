import { useSelector, shallowEqual } from "react-redux";
import { getIsLoggedIn } from "../../../redux/auth/authSelector";

const useAuth = ()=> {
    const isLoggedIn = useSelector(getIsLoggedIn, shallowEqual);

    return isLoggedIn;
}

export default useAuth;