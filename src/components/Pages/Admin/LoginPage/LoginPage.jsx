import { useState } from "react";
// import firebase from "firebase/compat/app";
import "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../../../api/authContext.jsx";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { logIn } = useAuth();
  const auth = getAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Logged in successfully
        logIn();
        const user = userCredential.user;
        console.log("Logged in user:", user);
        // Perform any additional actions after login
      })
      .catch((error) => {
        // Handle login errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorCode, errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Zaloguj się</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default LoginPage;
