import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../../types/product.type";
import data from "../../data/data";
import "./ProductNotice.scss";
import Carousel from "../../componnents/Shared/carousels/Carousel";
import StockFlagComponent from "../../componnents/Shared/stockFlagComponent/stockFlagComponent";
import AddToBasket from "../../componnents/Shared/addToBasket/addToBasket";
const ProductNotice = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();

  const [temporaryPics, setTemporaryPics] = useState<string[]>([]);

  useEffect(() => {
    setProduct(getProduct());
  }, []);

  const getProduct = () => {
    const productData = data.find((product) => product.id === id);

    if (productData) {
      setTemporaryPics(
        // TODO : when backend is ready, delete this and use the real data
        productData!.pictures!.map(
          (picture) => `${process.env.REACT_APP_BACK_LOCAL_URL}/${picture}`
        )
      );
    }

    return productData ? productData : null;
  };
  return (
    <>
      {product && (
        <>
          <Carousel
            images={temporaryPics || []}
            carouselDelay={4000}
            isDiapo={false}
          />
          <div className="product-notice-data">
            <div className="product-notice-name-price">
              <h2>{product.name}</h2>
              <p>{product.price} €</p>
            </div>
            <StockFlagComponent quantity={product.quantity} />
            <p>{product.description}</p>
          </div>
          <div className="product-notice-basket">
            <AddToBasket isShort={false} />
          </div>
        </>
      )}
    </>
  );
};

export default ProductNotice;
