// import { useContext, useEffect, useState } from 'react';
// import { ViewContext } from '../ServiceLayout';
// import { products } from '@/lib/productsData';
// import ProductsView from '@/components/Product/ProductView';
// import { Product } from '@/types/ProductInterface';

// const CustomServerTemp = () => {
// 	const { currentView } = useContext(ViewContext);
// 	const [products, setProducts] = useState<Product[]>([]);
// 	const serverProducts = products.filter(p => p.category === 'server');

// 	useEffect(() => {
// 		const fetchProducts = async () => {
// 			try {
// 				const response = await fetch(
// 					'https://tortuga7-backend.onrender.com/items'
// 				);
// 				if (!response.ok) {
// 					throw new Error('Product fetch failed');
// 				}
// 				const data = await response.json();
// 				console.log(data);
// 				setProducts(data);
// 			} catch (error) {
// 				console.error('Error fetching Products', error);
// 			}
// 		};
// 		fetchProducts();
// 	}, []);

// 	return <ProductsView products={serverProducts} view={currentView} />;
// };

// export default CustomServerTemp;
