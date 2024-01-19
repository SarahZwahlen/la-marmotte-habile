import ProductCard from "../../componnents/ProductCard/ProductCard";
import data from "../../data/data";
import { Product } from "../../types/product.type";

const Products = () => {
  
  return (
    <main>
      {data.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Products;
