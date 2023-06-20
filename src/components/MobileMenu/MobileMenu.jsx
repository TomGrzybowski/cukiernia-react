import styles from "./components.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  &.active {
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
            <StyledNavLink to="/" onClick={handleClose}>
              Strona główna
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/oferta" onClick={handleClose}>
              Oferta
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/cennik" onClick={handleClose}>
              Cennik
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/kontakt" onClick={handleClose}>
              Kontakt
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/galeria" onClick={handleClose}>
              Galeria
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/zamowienie" onClick={handleClose}>
              Zamówienie
            </StyledNavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

MobileMenu.propTypes = {
  handleClose: PropTypes.func,
  shown: PropTypes.bool,
};

export default MobileMenu;
