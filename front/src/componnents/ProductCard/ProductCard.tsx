import { Link } from "react-router-dom";
import { Product } from "../../types/product.type";
import BasketIcon from "../Shared/icons/basketIcon";
import "./ProductCard.scss";

interface ProductInterface {
  product: Product;
}

const ProductCard = (props: ProductInterface) => {
  return (
    <div className="product-card">
      <img
        src={`${process.env.REACT_APP_BACK_LOCAL_URL}/${props.product.thumbnail}`}
        alt={props.product.name}
      />
      <div className="product-card-data">
        <div className="product-card-name-price">
          <Link to={`/product/${props.product.id}`}>{props.product.name}</Link>
          <p>{props.product.price} €</p>
        </div>
        <div className="product-card-descrption-basket">
          <p>{props.product.description}</p>
          <button className="button-primary">
            <BasketIcon />
            <p>Ajouter</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
