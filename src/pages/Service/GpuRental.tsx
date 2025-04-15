import { useContext } from "react";
import { ViewContext } from "./ServiceLayout";
import { products } from "@/lib/productsData";

const GpuRental = () => {
  const { currentView } = useContext(ViewContext);
  const serverProducts = products.filter((p) => p.category === "server");
  return <div>GpuRental</div>;
};

export default GpuRental;
