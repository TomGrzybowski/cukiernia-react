import styles from "./components.module.scss";

import Socials from "../Socials/Socials.jsx";
import MainNavbar from "../MainNavbar/MainNavbar.jsx";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { useEffect, useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBurger = () => {
    const body = document.querySelector("body");
    body.classList.toggle(styles["show-mobile-menu"]);

    setShowMobileMenu(!showMobileMenu);
  };

  const handleClose = () => {
    console.log("I worked");
    setShowMobileMenu(false);
  };

  return (
    // <div>Header</div>
    <>
      <header className={styles.header}>
        {/* <MobileMenu /> */}
        <div className={styles.box}>
          {/* <img
            src="src/assets/main-logo.png"
            alt="Logo cukierni"
            width={180}
            height={180}
            className={styles.header__logo}
          /> */}
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className={styles.burger}
            onClick={handleBurger}
          />

          <Socials />
        </div>

        <MainNavbar />

        {isMobile && (
          <MobileMenu handleClose={handleClose} shown={showMobileMenu} />
        )}
      </header>
    </>
  );
};

export default Header;
