// import styles from "./Admin.module.scss";

// import { Outlet } from "react-router";
import { useAuth } from "../../../api/authContext.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import EditingForm from "./EditingForm.jsx/EditingForm.jsx";

const Admin = () => {
  const { isLoggedIn, logOut } = useAuth();

  return (
    <>
      <div>
        Status: {isLoggedIn.toString()}
        {isLoggedIn ? (
          <button onClick={logOut}>Wyloguj się</button>
        ) : (
          <p>Zaloguj się</p>
        )}
      </div>
      <div>{isLoggedIn ? <EditingForm /> : <LoginPage />}</div>
    </>
  );
};

export default Admin;
