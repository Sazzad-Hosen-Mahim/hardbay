import { useContext, useEffect } from "react";

import ProductsView from "@/components/Product/ProductView";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import { ViewContext } from "../ViewContext";

const CustomServerTemp = () => {
  const { currentView } = useContext(ViewContext);
  const dispatch = useAppDispatch();

  // const { products } = useAppSelector((state) => state.product);
  const { filteredProducts } = useAppSelector((state) => state.dynamicProduct);

  const customServerProd = filteredProducts
    .filter((p) => p.service && p.service.title === "Custom Server")
    .map((p) => ({
      ...p,
      title: p.service?.title || "Untitled",
    }));

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  return <ProductsView products={customServerProd} view={currentView} />;
};

export default CustomServerTemp;
