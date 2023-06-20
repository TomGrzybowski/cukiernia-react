import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./components.module.scss";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Socials() {
  return (
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
  );
}

export default Socials;
