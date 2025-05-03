import { useContext, useEffect } from "react";


import ProductsView from "@/components/Product/ProductView";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProducts } from "@/store/Slices/ProductSlice/productSlice";
import { ViewContext } from "./Service/ViewContext";

const Partners = () => {
  const { currentView } = useContext(ViewContext);
  const dispatch = useAppDispatch();
  
    const { products, loading, error, currentPage, limit } = useAppSelector(
      state => state.product
    );
  
    //   const [localProducts, setLocalProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      dispatch(fetchProducts({ page: currentPage, limit }));
    }, [dispatch, currentPage, limit]);
    
    // console.log("Product from reduxxxxxxx", products);

	if (loading) {
		return <div className="text-center mt-16">Loading Products...</div>;
	}

	if (error) {
		return <div className="text-center mt-20">Error: {error}</div>;
	}

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
