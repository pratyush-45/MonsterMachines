import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";
import HelmetCard from "./HelmetCard";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>CHOOSE FROM OUR CATEGORIES</h1>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div> */}
      <h1 className={styles.title}>VIEW ALL CATEGORIES</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        <HelmetCard />
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
