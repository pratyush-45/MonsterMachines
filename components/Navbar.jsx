import Image from "next/legacy/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width={32} height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>CONTACT US NOW!</div>
          <div className={styles.text}>7805078344</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          {/* <li className={styles.listItem}>Homepage</li> */}
          <Image src="/img/logo.png" alt="" width={450} height={40} />
          {/* <li className={styles.listItem}>Contact</li> */}
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width={30} height={30} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
