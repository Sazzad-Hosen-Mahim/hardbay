import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useContext, useEffect } from "react";
import { ViewContext } from "../Service/ViewContext";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import ProductsView from "@/components/Product/ProductView";

const NVIDIA = () => {
  const { currentView } = useContext(ViewContext);
  const dispatch = useAppDispatch();

  // const { products } = useAppSelector((state) => state.product);
  // const { filteredProducts } = useAppSelector((state) => state.dynamicProduct);
  const { products } = useAppSelector((state) => state.product);

  const nvidiaProd = products
    .filter((p) => p.brandName === "NVIDIA")
    .map((p) => ({
      ...p,
      title: p.brandName || "Untitled",
    }));

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div>
      <ProductsView products={nvidiaProd} view={currentView} />
    </div>
  );
};

export default NVIDIA;
