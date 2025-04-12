// components/products/ProductCardList.tsx
import { Product } from "@/lib/productsData";
import ProductContent from "./ProductContent";

interface ProductCardListProps {
  product: Product;
}

const ProductCardList = ({ product }: ProductCardListProps) => {
  return (
    <div className="flex border rounded-xs overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-1/3 object-cover min-w-[200px]"
      />
      <div className="w-2/3 p-4">
        <ProductContent product={product} />
      </div>
    </div>
  );
};

export default ProductCardList;
