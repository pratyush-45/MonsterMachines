import Image from "next/legacy/image";
import styles from "../styles/Footer.module.css";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title}>CONNECT WITH US</h1>
          <p className={styles.text}>
            <FaLocationDot className={styles.icons} />{" "}
            <a
              href="https://maps.app.goo.gl/niM5qcSPpctiQApv6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Location
            </a>
            <br />
            <FaInstagram className={styles.icons} />{" "}
            <a
              href="https://www.instagram.com/monstermachine77/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <br />
            <FaYoutube className={styles.icons} />
            <a
              href="https://www.youtube.com/@monstermachine8164"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Youtube
            </a>
            <br />
            <FiMail className={styles.icons} />{" "}
            <a href="mailto:surajvishwakarma78050@gmail.com">Mail</a>
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR STORE</h1>
          <p className={styles.text}>
            Guru Ghasidas Chowk,
            <br /> Budhwari Bypass road,
            <br />
            TP Nagar.
            <br />
            Korba, Chhattisgarh
            <br /> 7805078344
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
