import { useEffect, useState } from "react";
import styles from "./MainPage.module.scss";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../../api/firebaseConfig.js";

const MainPage = () => {
  const [imageOneUrl, setImageOneUrl] = useState("");
  const [imageTwoUrl, setImageTwoUrl] = useState("");

  useEffect(() => {
    // Fetch the image URLs from Firebase Storage
    const fetchImageURLs = async () => {
      try {
        const storageRefOne = ref(storage, "assets/zdjecie-3.jpg");
        const storageRefTwo = ref(storage, "assets/zdjecie-1.jpg");
        // const imageName = "main-logo.png"; // Replace with the specific image name

        // Get the reference to the specific image
        const urlOne = await getDownloadURL(storageRefOne);
        const urlTwo = await getDownloadURL(storageRefTwo);

        setImageOneUrl(urlOne);
        setImageTwoUrl(urlTwo);
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImageURLs();
  }, []);
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.description}>
          <h1 className={styles.header}>Poznaj moją domową pracownię!</h1>
          <p className={styles.paragraph}>
            Witaj w mojej pracowni cukierniczej! Jestem cukiernikiem z
            wieloletnim doświadczeniem, zdobyłam szlify u Wojciecha Kandulskiego
            oraz pracując w renomowanych cukierniach Bajka i Regionalna. Od 2022
            roku prowadzę własną pracownię, w której stawiam na najwyższą jakość
            i naturalne składniki.
          </p>
          <p className={styles.paragraph}>
            Specjalizuję się w tworzeniu tortów artystycznych dla dzieci i
            dorosłych. Z wielką starannością i dbałością o szczegóły
            przygotowuję torty dla dzieci z postaciami z bajek oraz fantazyjne
            torty dla dorosłych na wszelkie okazje, w tym także na wieczór
            panieński/kawalerski. Wszystkie torty w mojej pracowni są
            przygotowywane z naturalnego masła 82%, prawdziwej śmietanki
            kremówki 36% oraz naturalnych dodatków, dzięki czemu są one nie
            tylko smaczne, ale również zdrowsze.
          </p>
        </div>
        <img
          src={imageOneUrl}
          width={500}
          height={300}
          alt="Zdjęcie tortu"
          className={styles["home-img"]}
        />
        <img
          src={imageTwoUrl}
          width={500}
          height={300}
          alt="Zdjęcie tortu"
          className={styles["home-img"]}
        />
        <div className={styles.description}>
          {/* <h1></h1> */}
          <p className={styles.paragraph}>
            W mojej pracowni oferujemy także torty i ciasta bezglutenowe oraz
            bezlaktozowe na śmietance kokosowej lub bezlaktozowej. Na naszym
            słodkim stole znajdziesz również Cake Popsy, babeczki dekorowane,
            mini deserki oraz personalizowane wypieki, wszystko przygotowane z
            naturalnych składników i zgodnie z Twoim indywidualnym zamówieniem.
          </p>
          <p className={styles.paragraph}>
            Cenimy sobie Wasze pomysły i chętnie wprowadzimy je w życie. Jeśli
            szukasz wyjątkowego i smacznego tortu na swoje przyjęcie, zachęcamy
            do kontaktu. Z przyjemnością stworzymy dla Ciebie wspaniałą słodką
            kompozycję, która zachwyci Twoich gości i pozostawi niezapomniane
            wrażenia.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
