import { useContext } from "react";

import { products } from "@/lib/productsData";
import ProductsView from "@/components/Product/ProductView";
import { ViewContext } from "./ViewContext";

const ITHardwareConsult = () => {
  const { currentView } = useContext(ViewContext);
  const itProducts = products.filter((p) => p.category === "consulting");
  return (
    <div>
      <ProductsView products={itProducts} view={currentView} />
    </div>
  );
};

export default ITHardwareConsult;
