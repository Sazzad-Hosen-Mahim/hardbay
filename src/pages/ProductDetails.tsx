import ProductDetail from '@/components/productDetails/ProductDetail';
import ProductTabSpecifications from '@/components/productDetails/ProductTabSpecifications';
import { Product } from '@/types/ProductInterface';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	const { id } = useParams();
	console.log(id);
	const [productData, setProductData] = useState<Product[]>([]);
	// const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch(
					'https://tortuga7-backend.onrender.com/items/'
				);
				if (!response.ok) {
					throw new Error('Product fetch failed');
				}
				const data = await response.json();

				console.log(data);
				setProductData(data);
			} catch (error) {
				console.error('Error fetching Products', error);
			}
		};
		fetchProducts();
	}, [id]);

	// IMPORTANT: If product not yet loaded, show loading
	// if (!selectedProduct) {
	// 	return <div>Loading product details...</div>;
	// }

	return (
		<div>
			<ProductDetail productData={productData.find(p => p.id === id)!} />
			<ProductTabSpecifications />
		</div>
	);
};

export default ProductDetails;
