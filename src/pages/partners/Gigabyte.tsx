import { useContext, useEffect } from "react";
import { ViewContext } from "../Service/ViewContext";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import ProductsView from "@/components/Product/ProductView";

const Gigabyte = () => {
  const { currentView } = useContext(ViewContext);
  const dispatch = useAppDispatch();

  // const { products } = useAppSelector((state) => state.product);
  // const { filteredProducts } = useAppSelector((state) => state.dynamicProduct);
  const { products } = useAppSelector((state) => state.product);

  const gigabyteProd = products
    .filter((p) => p.brandName === "Gigabyte")
    .map((p) => ({
      ...p,
      title: p.brandName || "Untitled",
    }));

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  console.log("AMD products", gigabyteProd);

  return (
    <div>
      <ProductsView products={gigabyteProd} view={currentView} />
    </div>
  );
};

export default Gigabyte;
