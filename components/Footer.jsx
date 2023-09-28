import Image from "next/legacy/image";
import styles from "../styles/Footer.module.css";

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
            Location
            <br />
            Mail
            <br /> Facebook
            <br /> Instagram
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR STORE</h1>
          <p className={styles.text}>
            221B, Baker Street.
            <br /> London, 85022
            <br /> (123) 456-7890
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
