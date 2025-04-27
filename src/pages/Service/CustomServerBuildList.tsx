import { customServerBuildApi, Product } from '@/api/customServerBuildApi';
import { useEffect, useState } from 'react';


function CustomServerBuildList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await customServerBuildApi.getAllProducts();
      console.log(response.data)
      setProducts(response.data.data);
    } catch (error) {
      console.error('Failed to fetch products', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Custom Server Builds</h1>
      {products.map((product) => (
        <div key={product.id} className="border rounded p-4 mb-4 shadow">
          <h2 className="text-xl font-semibold">{product.productName}</h2>
          <p>Model: {product.productModel}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomServerBuildList;
