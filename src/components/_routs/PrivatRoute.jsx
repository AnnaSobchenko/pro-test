import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";

export default function PrivateRoute({
  children,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  routeProps: PropTypes.object,
};