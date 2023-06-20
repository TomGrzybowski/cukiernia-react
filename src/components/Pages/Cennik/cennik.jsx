// import Prices from "@/components/Prices/Prices.jsx";
import styles from "./cennik.module.css";
// import Sizes from "@/components/Sizes/Sizes.jsx";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../../api/firebaseConfig.js";
import Prices from "../../Prices/Prices.jsx";
import Sizes from "../../Sizes/Sizes.jsx";

const Cennik = () => {
  // const [imageURLs, setImageURLs] = useState([]);
  const [imagesToDisplay, setImagesToDisplay] = useState([]);

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

        // setImageURLs(urls);

        const copyUrls = urls;
        const urlsToDisplay = copyUrls.splice(0, 3);
        console.log("urlsToDisplay ", urlsToDisplay);

        setImagesToDisplay(urlsToDisplay);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageURLs();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Cennik</h1>
          <p className={styles.paragraph}>
            Torty wyceniane są według wielkości mierzonej w porcjach
          </p>
          <h2 className={styles.heading}>TORTY ARTYSTYCZNE</h2>
          <p className={styles.paragraph}>
            Dekorowane z zewnątrz tynkiem maślanym, na gładko, zabarwione na
            wybrany kolor.
          </p>
          <Prices />
          <p className={`${styles.paragraph} ${styles.warning}`}>
            UWAGA: do każdego tortu doliczana jest indywidualnie cena dekoracji
          </p>
          <p className={`${styles.ulHeader}`}>
            Możliwe dekorację na tortach artystycznych:
          </p>
          <ul className={styles.list}>
            <li>Ręcznie robiona figurka z masy cukrowej</li>
            <li>Topery cukrowe</li>
            <li>Wydruki cukrowe</li>
            <li>Kwiaty świeże</li>
            <li>Kwiaty cukrowe</li>
            <li>Owoce</li>
            <li>Lizaki z izomaltu</li>
            <li>Lizaki bezowe</li>
          </ul>
          <Sizes />
        </main>
        <sidebar className={styles.sidebarImages}>
          {imagesToDisplay.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Piękny tort`}
              className={styles.image}
              id={index}
              loading="lazy"
            />
          ))}
        </sidebar>
      </div>
    </>
  );
};

export default Cennik;
