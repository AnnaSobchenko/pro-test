import PropTypes from "prop-types";
import { Route } from "react-router-dom";

export default function PublicRoute({ children, redirectTo, ...routeProps }) {
    
    return (
      <Route {...routeProps}>       
          children       
      </Route>
    );
  }
  
  PublicRoute.propTypes = {
    // redirectTo: PropTypes.string.isRequired,
    routeProps: PropTypes.object,
  };