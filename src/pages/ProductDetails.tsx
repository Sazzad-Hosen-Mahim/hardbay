
import ProductDetail from "@/components/productDetails/ProductDetail";
import ProductTabSpecifications from "@/components/productDetails/ProductTabSpecifications";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProductDetails } from "@/store/Slices/ProductSlice/productDetailsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useAppDispatch();

  const product = useAppSelector((state) => state.productDetails.product);

  console.log("Product details xxxxxxxx", product);

  useEffect(() => {
    dispatch(fetchProductDetails(id as string));
  }, [dispatch, id]);

  return (
    <div>
      <ProductDetail data={product} />
      <ProductTabSpecifications data={product} />
    </div>
  );

};

export default ProductDetails;
