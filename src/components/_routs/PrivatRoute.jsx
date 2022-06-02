import PropTypes from "prop-types";
import { Route } from "react-router-dom";

export default function PrivateRoute({
  children,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) {
   
  return (
    <Route {...routeProps}>
      {/* {isLoggedIn ? children : <Redirect to={redirectTo} />} */}
    </Route>
  );
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  routeProps: PropTypes.object,
};