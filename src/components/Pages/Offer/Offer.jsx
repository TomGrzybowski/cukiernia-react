import { useEffect, useState } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import styles from "./oferta.module.scss";
import { db, storage } from "../../../api/firebaseConfig.js";

const Oferta = () => {
  // const [imageURLs, setImageURLs] = useState([]);
  const [imagesToDisplay, setImagesToDisplay] = useState([]);
  const [products, setProducts] = useState([]);
  const [tastes, setTastes] = useState([]);
  const [toppings, setToppings] = useState([]);

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
        const urlsToDisplay = copyUrls.splice(5, 3);
        console.log("urlsToDisplay ", urlsToDisplay);

        setImagesToDisplay(urlsToDisplay);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageURLs();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "oferta"));
        const dataArray = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          dataArray.push(data);
        });

        setProducts(dataArray);

        const tastesSnapshot = await getDocs(collection(db, "smaki"));
        const tastesDataArray = [];

        tastesSnapshot.forEach((doc) => {
          const data = doc.data();
          tastesDataArray.push(data);
        });

        setTastes(tastesDataArray);

        const toppingsSnapshot = await getDocs(collection(db, "dodatki"));
        const toppingsDataArray = [];

        toppingsSnapshot.forEach((doc) => {
          const data = doc.data();
          toppingsDataArray.push(data);
        });

        setToppings(toppingsDataArray);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Nasza Oferta</h1>
          <ul className={styles.list}>
            {products
              .sort((a, b) => a.order - b.order)
              .map((product, index) => (
                <li key={index}>{product.name}</li>
              ))}
          </ul>
          <h2 className={styles.heading}>Smaki lekkie i mało słodkie</h2>
          <ul className={styles.list}>
            {tastes
              .filter((taste) => taste.tag === "malo-slodki")
              .map((taste, index) => (
                <li className={styles.item} key={index}>
                  {taste.name}
                  {taste.sklad && (
                    <p className={styles.afterContent}>Skład: {taste.sklad}</p>
                  )}
                </li>
              ))}
          </ul>
          <h2 className={styles.heading}>Smaki słodkie</h2>
          <ul className={styles.list}>
            {tastes
              .filter((taste) => taste.tag === "slodki")
              .map((taste, index) => (
                <li className={styles.item} key={index}>
                  {taste.name}
                  {taste.sklad && (
                    <p className={styles.afterContent}>Skład: {taste.sklad}</p>
                  )}
                </li>
              ))}
          </ul>
          <h2 className={styles.heading}>Dodatki</h2>
          <p className={styles.afterContent}>
            W sezonie używamy świeżych owoców, poza sezonem - mrożonych
          </p>
          <p className={styles.afterContent}>
            Cukier puder można wymienić na ksylitol za dodatkową opłatą
          </p>
          <ul className={styles.list}>
            {toppings
              .sort((a, b) => {
                if (a.tag === "owoc" && b.tag !== "owoc") {
                  return -1; // `a` comes first if it has the "owoc" tag and `b` doesn't
                } else if (a.tag !== "owoc" && b.tag === "owoc") {
                  return 1; // `b` comes first if it has the "owoc" tag and `a` doesn't
                } else {
                  return 0; // maintain the original order
                }
              })
              .map((topping, index) => (
                <li className={styles.item} key={index}>
                  {topping.name}
                </li>
              ))}
          </ul>
        </main>
        <aside className={styles.sidebarImages}>
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
        </aside>
      </div>
    </>
  );
};

export default Oferta;
