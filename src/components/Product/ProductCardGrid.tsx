// components/products/ProductCardGrid.tsx
import { Product } from "@/lib/productsData";
import ProductContent from "./ProductContent";

interface ProductCardGridProps {
  product: Product;
}

const ProductCardGrid = ({ product }: ProductCardGridProps) => {
  return (
    <div className="flex flex-col h-full border rounded-xs overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <ProductContent product={product} />
      </div>
    </div>
  );
};

export default ProductCardGrid;
