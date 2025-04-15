import { useContext } from "react";
import { ViewContext } from "./ServiceLayout";
import { products } from "@/lib/productsData";
import ProductsView from "@/components/Product/ProductView";

const EnterpriseStorage = () => {
  const { currentView } = useContext(ViewContext);
  const storageProducts = products.filter((p) => p.category === "storage");
  return (
    <div>
      <ProductsView products={storageProducts} view={currentView} />
    </div>
  );
};

export default EnterpriseStorage;
