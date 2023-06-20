import PropTypes from "prop-types";
import styles from "./ImageGallery.module.scss";

const ImageGallery = ({ imageURLs = [], handleImageClick }) => {
  return (
    <ul className={styles.gallery} onClick={handleImageClick}>
      {imageURLs.map((url, index) => (
        <li key={index} className={styles.listItem}>
          <img
            src={url}
            alt={`Piękny tort`}
            className={styles.image}
            id={index}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imageURLs: PropTypes.array,
  pages: PropTypes.number,
  handleImageClick: PropTypes.func,
};

export default ImageGallery;
