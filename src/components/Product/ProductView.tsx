import ProductCardList from "./ProductCardList";
import ProductCardGrid from "./ProductCardGrid";
import { ProductsViewProps } from "@/types/ProductInterface";

const ProductsView = ({ products, view }: ProductsViewProps) => {
  return (
    <div
      className={`mt-5 ${
        view === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          : "space-y-6"
      }`}
    >
      {view === "list"
        ? products?.map((product) => {
            return <ProductCardList key={product.id} product={product} />;
          })
        : products?.map((product) => {
            return <ProductCardGrid key={product.id} product={product} />;
          })}
    </div>
  );
};

export default ProductsView;
