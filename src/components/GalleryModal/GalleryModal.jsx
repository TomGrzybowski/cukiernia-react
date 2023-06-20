import { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./GalleryModal.module.scss";

const GalleryModal = ({ escFunction, src, handleOverlayClick }) => {
  useEffect(() => {
    document.addEventListener("keydown", escFunction);
    const overlay = document.querySelector("#overlay");
    overlay.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", escFunction);
      const overlay = document.querySelector("#overlay");
      if (overlay) {
        overlay.removeEventListener("click", handleOverlayClick);
      }
    };
  }, [escFunction, handleOverlayClick]);

  return (
    <div className={styles.overlay} id="overlay">
      <div className={styles.modal}>
        <img src={src} alt="Powiększony obraz z pięknym tortem" />
      </div>
    </div>
  );
};

GalleryModal.propTypes = {
  escFunction: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
  handleOverlayClick: PropTypes.func,
};

export default GalleryModal;
