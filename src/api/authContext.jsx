import { createContext, useContext, useState } from "react";
// import firebase from "firebase/compat/app";
import "firebase/auth";
import PropTypes from "prop-types";
import { getAuth, signOut } from "firebase/auth";
// import { getAuth } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();
  // const auth =getAuth()

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Handle successful logout
        setIsLoggedIn(false);
        console.log("User logged out successfully");
      })
      .catch((error) => {
        // Handle logout error
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error logging out: ${errorMessage} (${errorCode})`);
      });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
