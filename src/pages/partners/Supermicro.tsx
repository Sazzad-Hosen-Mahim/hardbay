import { useContext, useEffect } from "react";
import { ViewContext } from "../Service/ViewContext";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import ProductsView from "@/components/Product/ProductView";

const Supermicro = () => {
  const { currentView } = useContext(ViewContext);
  const dispatch = useAppDispatch();

  // const { products } = useAppSelector((state) => state.product);
  // const { filteredProducts } = useAppSelector((state) => state.dynamicProduct);
  const { products } = useAppSelector((state) => state.product);

  const supermicroProd = products
    .filter((p) => p.brandName === "Supermicro")
    .map((p) => ({
      ...p,
      title: p.brandName || "Untitled",
    }));

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div>
      <ProductsView products={supermicroProd} view={currentView} />
    </div>
  );
};

export default Supermicro;
