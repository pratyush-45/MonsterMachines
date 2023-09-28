import Image from "next/legacy/image";
import styles from "../styles/ProductCard.module.css";
import Link from "next/link";
import Helmet from "../public/img/helmet.png";

const HelmetCard = () => {
  return (
    <div className={styles.container}>
      <Link href={`/helmets`} passHref>
        <Image src={Helmet} alt="" width={500} height={500} />
      </Link>
      <h1 className={styles.title}>Our Helmets</h1>
      <span className={styles.price}></span>
      <p className={styles.desc}>Check out our wide range of Helmets</p>
    </div>
  );
};

export default HelmetCard;
