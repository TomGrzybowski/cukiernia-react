// import { Navigate } from "react-router-dom";
// import PropTypes from "prop-types";
// import { useAuth } from "../api/authContext.jsx";

// export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
//   const { isLoggedIn } = useAuth(); // Custom hook to get the authentication state

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

// RestrictedRoute.propTypes = {
//   component: PropTypes.elementType.isRequired,
//   redirectTo: PropTypes.string,
// };
