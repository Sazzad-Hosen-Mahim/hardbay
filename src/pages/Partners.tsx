import { useContext, useEffect } from "react";
import { ViewContext } from "../pages/partners/PartnersLayout";
import ProductsView from "@/components/Product/ProductView";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";

const Partners = () => {
  const { currentView } = useContext(ViewContext);

  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div className="">
      {products.map((p) => (
        <div key={p.id}>
          <ProductsView products={products} view={currentView} />
        </div>
      ))}
    </div>
  );
};

export default Partners;
