import ProductDetail from '@/components/productDetails/ProductDetail';
import ProductTabSpecifications from '@/components/productDetails/ProductTabSpecifications';

import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<div>
			<ProductDetail />
			<ProductTabSpecifications />
		</div>
	);
};

export default ProductDetails;
