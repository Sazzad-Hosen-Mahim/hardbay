import { useContext } from "react";
import { ViewContext } from "./Service/ServiceLayout";
import { products } from "@/lib/productsData";
import ProductsView from "@/components/Product/ProductView";

const Partners = () => {
  const { currentView } = useContext(ViewContext);

  return (
    <div className="">
      {products.map((p) => (
        <div key={p.id}>
          <ProductsView products={products} view={currentView} />
        </div>
      ))}
    </div>
  );
};

export default Partners;
