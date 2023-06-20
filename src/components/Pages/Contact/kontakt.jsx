import styles from "./kontakt.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Kontakt = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>Skontaktuj się z nami</h1>
        <p>
          Chcesz złożyć zamówienie? A może masz pytania lub chcesz zobaczyć
          więcej naszych dzieł? Zapraszamy do kontaktu oraz odwiedzenia naszych
          social mediów, gdzie publikujemy więcej przykładów naszych słodkości
          :)
        </p>
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com/jolanta.sztanka.5"
            aria-label="Odwiedź nas na Facebooku"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="xl"
              className={styles.socials__icon}
            />
          </a>
          <a
            href="https://www.instagram.com/jolantasztanka/?fbclid=IwAR3vCXgp2H3lmT9lhmohzZj4VoEqY466cD_l55N5uX93N1791t1DDfRwrhs"
            aria-label="Odwiedź nas na Instagramie"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              className={styles.socials__icon}
            />
          </a>
          <a href="tel:+48510745568" aria-label="Zadzwoń do nas">
            <FontAwesomeIcon
              icon={faPhone}
              size="xl"
              className={styles.socials__icon}
            />
          </a>
          <a href="mailto:wpiszmaila@email.com" aria-label="Napisz do nas">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className={styles.socials__icon}
            />
          </a>
        </div>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1296.262148516599!2d14.549904262168916!3d53.42635677522746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa09f5e876f4f5%3A0x5b82c07fb2dbc9f2!2sKot%20Gacek!5e0!3m2!1spl!2spl!4v1685147606035!5m2!1spl!2spl"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default Kontakt;
