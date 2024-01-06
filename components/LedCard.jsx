import Image from "next/legacy/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";
import Led from "../public/img/led.png";

const LedCard = () => {
  return (
    <div className={styles.container}>
      <Link href={`/leds`} passHref>
        <Image src={Led} alt="" width={500} height={500} />
      </Link>
      <h1 className={styles.title}>Our Accessory Lights</h1>
      <span className={styles.price}></span>
      <p className={styles.desc}>
        Check out our wide range of Motorbike Lights
      </p>
    </div>
  );
};

export default LedCard;
