import { useContext, useEffect } from "react";

import ProductsView from "@/components/Product/ProductView";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import { ViewContext } from "./ViewContext";

const GpuRental = () => {
  const { currentView } = useContext(ViewContext);
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.product);

  const gpuRentalProd = products
    .filter((p) => p.service && p.service.title === "GPU rental")
    .map((p) => ({
      ...p,
      title: p.service?.title || "Untitled",
    }));

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div>
      <ProductsView products={gpuRentalProd} view={currentView} />
    </div>
  );
};

export default GpuRental;
