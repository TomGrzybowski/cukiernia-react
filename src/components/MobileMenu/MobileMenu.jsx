import styles from "./components.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  color: var(--main-color);
  font-weight: bold;

  &::after {
    content: "";
    width: 100%;
    height: 4px;
    background-color: var(--main-color);
    position: relative;
    top: 0.5rem;
    left: 0;
    display: block;
    visibility: visible;
    border-radius: 10px;
  }
`;

const MobileMenu = ({ handleClose, shown }) => {
  // const modal = document.querySelector(styles.modal);

  useEffect(() => {
    const body = document.querySelector("body");
    // console.log(shown);
    if (shown) {
      body.classList.add(styles["show-mobile-menu"]); // add class to body to trigger animation
    } else {
      body.classList.remove(styles["show-mobile-menu"]);
    }
    return () => {
      body.classList.remove(styles["show-mobile-menu"]); // remove class on cleanup
    };
  }, [shown]);

  return (
    <div className={`${styles["mobile-menu"]}`}>
      <FontAwesomeIcon
        icon={faX}
        // size="xs"
        className={styles.close}
        onClick={handleClose}
      />
      <nav className={styles["mobile-navbar"]}>
        <ul className={styles["mobile-navlist"]}>
          <li>
            <StyledNavLink to="/">Strona główna</StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/">Strona główna</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/oferta">Oferta</StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/cennik">Cennik</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/galeria">Galeria</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/zamowienie">Zamówienie</StyledNavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
