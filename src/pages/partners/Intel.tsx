import { useContext, useEffect } from "react";
import { ViewContext } from "../Service/ViewContext";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import ProductsView from "@/components/Product/ProductView";

const Intel = () => {
  const { currentView } = useContext(ViewContext);
  const dispatch = useAppDispatch();

  // const { products } = useAppSelector((state) => state.product);
  // const { filteredProducts } = useAppSelector((state) => state.dynamicProduct);
  const { products } = useAppSelector((state) => state.product);

  const intelProd = products
    .filter((p) => p.brandName === "Intel")
    .map((p) => ({
      ...p,
      title: p.brandName || "Untitled",
    }));

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  console.log("AMD products", intelProd);

  return (
    <div>
      <ProductsView products={intelProd} view={currentView} />
    </div>
  );
};

export default Intel;
