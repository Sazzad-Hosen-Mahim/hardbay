import ProductDetail from "@/components/productDetails/ProductDetail";
import ProductTabSpecifications from "@/components/productDetails/ProductTabSpecifications";
import { Product } from "@/types/ProductInterface";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://tortuga7-backend.onrender.com/custom-server-build"
        );
        if (!response.ok) {
          throw new Error("Product fetch failed");
        }
        const data = await response.json();
        // console.log(
        // 	data?.services.map((item: Product) => item.id),
        // 	'1111111111111'
        // );
        console.log(data);
        setProducts(data);
        // setProducts(data);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts();
  }, [id]);

  // console.log(products);
  // const findProduct = products.find((item: Product) => item.id === id);
  // console.log(findProduct, 'findProduct');

  // const filteredProduct = product.filter((item: Product) => item.id === id);
  // console.log(filteredProduct);

  //data.services.map().items.map() = title, id, description,

  return (
    <div>
      <ProductDetail />
      <ProductTabSpecifications />
    </div>
  );
};

export default ProductDetails;
