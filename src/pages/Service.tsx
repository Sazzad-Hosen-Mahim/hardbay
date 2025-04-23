import { useContext, useEffect, useState } from 'react';
import { ViewContext } from './Service/ServiceLayout';
// import { products } from '@/lib/productsData';
import ProductsView from '@/components/Product/ProductView';

const Service = () => {
	const { currentView } = useContext(ViewContext);
	const [products, setProducts] = useState<Product[]>([]);

	interface Product {
		id: string;
		title: string;
		description: string;
		// add other fields as needed
	}

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch(
					'https://tortuga7-backend.onrender.com/services'
				);
				if (!response.ok) {
					throw new Error('Product fetch failed');
				}
				const data = await response.json();
				console.log(data);
				setProducts(data);
			} catch (error) {
				console.error('Error fetching Products', error);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className="mt-16">
			<ProductsView products={products} view={currentView} />
		</div>
	);
};

export default Service;
