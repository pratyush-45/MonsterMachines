import Image from "next/legacy/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";
import Horn from "../public/img/horn.png";

const HornCard = () => {
  return (
    <div className={styles.container}>
      <Link href={`/horns`} passHref>
        <Image src={Horn} alt="" width={500} height={500} />
      </Link>
      <h1 className={styles.title}>Our Horns</h1>
      <span className={styles.price}></span>
      <p className={styles.desc}>Check out our wide range of Motorbike Horns</p>
    </div>
  );
};

export default HornCard;
