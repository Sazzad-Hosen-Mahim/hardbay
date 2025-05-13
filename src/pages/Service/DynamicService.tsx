import { useContext, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";

import ProductsView from "@/components/Product/ProductView";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import { ViewContext } from "./ViewContext";

function slugToTitle(slug: string): string {
  const acronyms = ["GPU", "CPU", "RAM"];

  return slug
    .split("-")
    .map((word) => {
      const upper = word.toUpperCase();
      return acronyms.includes(upper)
        ? upper
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

const DynamicService = () => {
  const { dynamicService } = useParams();
  const { currentView } = useContext(ViewContext);
  const dispatch = useAppDispatch();

  const { filteredProducts } = useAppSelector((state) => state.dynamicProduct);

  const serviceTitle = useMemo(
    () => (dynamicService ? slugToTitle(dynamicService) : ""),
    [dynamicService]
  );

  console.log(serviceTitle, "serviceTitle");

  const gpuRentalProd = useMemo(
    () =>
      filteredProducts
        .filter((p) => p.service?.title === serviceTitle)
        .map((p) => ({
          ...p,
          title: p.service?.title || "Untitled",
        })),
    [filteredProducts, serviceTitle]
  );

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  return <ProductsView products={gpuRentalProd} view={currentView} />;
};

export default DynamicService;
