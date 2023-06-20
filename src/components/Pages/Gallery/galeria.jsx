import styles from "./galeria.module.css";
import { useEffect, useState } from "react";
// import { storage } from "./api/firebaseConfig.js";
import { ref, listAll, getDownloadURL } from "firebase/storage";
// import ImageGallery from "@/components/ImageGallery/ImageGallery.jsx";
// import GalleryModal from "@/components/GalleryModal/GalleryModal.jsx";
import { storage } from "../../../api/firebaseConfig.js";
import ImageGallery from "../../ImageGallery/ImageGallery.jsx";
import GalleryModal from "../../GalleryModal/GalleryModal.jsx";

const Galeria = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);
  const [modalImageSource, setModalImageSource] = useState("");

  useEffect(() => {
    // Fetch the image URLs from Firebase Storage
    const fetchImageURLs = async () => {
      try {
        const storageRef = ref(storage, "zdjecia");
        // const folderRef = ref(storageRef, "zdjecia"); // Set the correct path to your folder in Firebase Storage

        // Get the list of items in the folder
        const listResult = await listAll(storageRef);

        // Get the download URL for each item in the list
        const urls = await Promise.all(
          listResult.items.map(async (item) => {
            const url = await getDownloadURL(item);
            return url;
          })
        );

        setImageURLs(urls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageURLs();
  }, []);

  const handleImageClick = (event) => {
    const src = event.target.src;
    if (src) {
      setIsModalShown(true);

      setModalImageSource(src);
    }
  };

  const escFunction = (event) => {
    if (event.key === "Escape") {
      setIsModalShown(false);
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target.id === "overlay") {
      setIsModalShown(false);
    }
  };

  return (
    <>
      {isModalShown ? (
        <GalleryModal
          src={modalImageSource}
          handleOverlayClick={handleOverlayClick}
          escFunction={escFunction}
        />
      ) : (
        <></>
      )}
      <main className={`${styles.main} `}>
        <ImageGallery
          imageURLs={imageURLs}
          handleImageClick={handleImageClick}
        />
      </main>
    </>
  );
};

export default Galeria;
