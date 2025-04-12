// components/products/ProductsView.tsx
import { Product } from "@/lib/productsData";
import ProductCardList from "./ProductCardList";
import ProductCardGrid from "./ProductCardGrid";

interface ProductsViewProps {
  products: Product[];
  view: "list" | "grid";
}

const ProductsView = ({ products, view }: ProductsViewProps) => {
  return (
    <div
      className={`mt-5 ${
        view === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          : "space-y-6"
      }`}
    >
      {products.map((product) =>
        view === "list" ? (
          <ProductCardList key={product.id} product={product} />
        ) : (
          <ProductCardGrid key={product.id} product={product} />
        )
      )}
    </div>
  );
};

export default ProductsView;
