import styles from "./components.module.scss";
import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";

import Socials from "../Socials/Socials.jsx";
import MainNavbar from "../MainNavbar/MainNavbar.jsx";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { storage } from "../../api/firebaseConfig.js";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    // Fetch the image URLs from Firebase Storage
    const fetchImageURLs = async () => {
      try {
        const storageRef = ref(storage, "assets/main-logo.png");
        // const imageName = "main-logo.png"; // Replace with the specific image name

        // Get the reference to the specific image
        const url = await getDownloadURL(storageRef);

        setLogoUrl(url);
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImageURLs();
  }, []);

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
          <img
            src={logoUrl}
            alt="Logo cukierni"
            width={180}
            height={180}
            className={styles.header__logo}
          />
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
