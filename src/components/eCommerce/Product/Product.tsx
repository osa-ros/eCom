import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
const { product, productImg } = styles;

const Product = () => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src="https://media.alshaya.com/adobe/assets/urn:aaid:aem:72d44fee-8b9d-4e16-b978-1fd7a2fa4e47/as/EID-29d88d0b810d4f9aa8275d1b385425d405501af6.jpg"
          alt="Product Image"
        />
      </div>
      <h2>Title</h2>
      <h3>100 DH</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
