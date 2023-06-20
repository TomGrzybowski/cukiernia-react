import styles from "./components.module.scss";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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

const MainNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
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
  );
};

export default MainNavbar;
