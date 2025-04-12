// components/CustomServerTemp.tsx
import { useContext } from "react";
import { ViewContext } from "../ServiceLayout";
import { products } from "@/lib/productsData";
import ProductsView from "@/components/Product/ProductView";

const CustomServerTemp = () => {
  const { currentView } = useContext(ViewContext);
  const serverProducts = products.filter((p) => p.category === "server");

  return <ProductsView products={serverProducts} view={currentView} />;
};

export default CustomServerTemp;
