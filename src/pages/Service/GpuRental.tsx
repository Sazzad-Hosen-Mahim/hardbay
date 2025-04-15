import { useContext } from "react";
import { ViewContext } from "./ServiceLayout";
import { products } from "@/lib/productsData";
import ProductsView from "@/components/Product/ProductView";

const GpuRental = () => {
  const { currentView } = useContext(ViewContext);
  const gpuProducts = products.filter((p) => p.category === "gpu");
  return (
    <div>
      <ProductsView products={gpuProducts} view={currentView} />
    </div>
  );
};

export default GpuRental;
