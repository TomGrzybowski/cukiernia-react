import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./zamowienie.module.scss";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Zamowienie = () => {
  return (
    <main>
      <div className={styles.container}>
        <h1>Zamówienie</h1>
        <p>
          W celu złożenia zamówienia, skontaktuj się z nami poprzez sms, mailowo
          lub na messengerze. W wiadomości podaj:
          <ul>
            <li>Ilość osób</li>
            <li>Motyw przewodni</li>
            <li>Kształt tortu oraz ilość pięter</li>
            <li>Wybrany smak</li>
            <li>Dodatki</li>
          </ul>
        </p>
        <p>
          WAŻNE! Aby zamówienie zostało przyjęte, najpóźniej 5 dni przed
          realizacją należy wpłacić 20% wartości zamówienia
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
        <p>
          Dane do przelewu:
          <ul>
            <li>Tutaj wpisać pełną nazwę działalności</li>
            <li>Można też wpisać adres</li>
            <li>Numer rachunku: 02 1020 4900 0000 8902 3393 2167</li>
          </ul>
        </p>
      </div>
    </main>
  );
};

export default Zamowienie;
