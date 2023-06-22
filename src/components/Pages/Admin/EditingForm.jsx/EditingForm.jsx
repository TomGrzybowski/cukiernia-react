import { useEffect, useState } from "react";
// import { useHistory } from "react-router";
import { useAuth } from "../../../../api/authContext.jsx";
// import { Redirect } from "react-router";
import { useNavigate } from "react-router-dom";
import ToppingsForm from "./Toppings/Toppings.jsx";
import styles from "./EditingForm.module.scss";
import Tastes from "./Tastes/Tastes.jsx";
import OfferForm from "./Offer/OfferForm.jsx";

const EditingForm = () => {
  //   const history = useHistory();
  const { isLoggedIn } = useAuth();
  const [selectedOption, setSelectedOption] = useState("");
  const navigateTo = useNavigate();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigateTo("/admin/login", { replace: true });
    }
  }, []);

  const renderComponent = () => {
    switch (selectedOption) {
      case "dodatki":
        return <ToppingsForm />;
      case "smaki":
        return <Tastes />;
      case "ceny":
        return <div> Hello 3</div>;
      case "oferta":
        return <OfferForm />;
      case "zdjecia":
        return <div> Hello 5</div>;
      default:
        return null;
    }
  };

  // Check if the user is logged in, otherwise redirect to the login page

  return (
    <div className={styles.container}>
      Co chcesz edytować?{" "}
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Wybierz opcję</option>
        <option value="dodatki">Dodatki</option>
        <option value="smaki">Smaki</option>
        <option value="ceny">Ceny</option>
        <option value="oferta">Oferta</option>
        <option value="zdjecia">Zdjęcia</option>
      </select>
      {renderComponent()}
    </div>
  );
};

export default EditingForm;
