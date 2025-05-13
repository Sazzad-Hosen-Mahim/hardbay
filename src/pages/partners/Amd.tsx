import { useContext, useEffect } from "react";
import { ViewContext } from "../Service/ViewContext";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import ProductsView from "@/components/Product/ProductView";

const Amd = () => {
  const { currentView } = useContext(ViewContext);
  const dispatch = useAppDispatch();

  // const { products } = useAppSelector((state) => state.product);
  // const { filteredProducts } = useAppSelector((state) => state.dynamicProduct);
  const { products } = useAppSelector((state) => state.product);

  const amdProd = products
    .filter((p) => p.brandName === "AMD")
    .map((p) => ({
      ...p,
      title: p.brandName || "Untitled",
    }));

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  console.log("AMD products", amdProd);

  return (
    <div>
      <ProductsView products={amdProd} view={currentView} />
    </div>
  );
};

export default Amd;
