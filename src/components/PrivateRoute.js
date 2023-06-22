// import { Navigate, Route } from "react-router-dom";
// import PropTypes, { element } from "prop-types";
// import { useAuth } from "../api/authContext.jsx";

// export const PrivateRoute = ({ path, element: Element, redirectTo }) => {
//   const { isLoggedIn } = useAuth(); // Custom hook to get the authentication state

//   return (
//     <Route
//       path={path}
//       element={isLoggedIn ? Element : <Navigate to={redirectTo} replace />}
//     />
//   );
// };

// PrivateRoute.propTypes = {
//   path: PropTypes.string,
//   //   component: PropTypes.elementType.isRequired,
//   redirectTo: PropTypes.string,
// };
