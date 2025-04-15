import ProductDetail from '@/components/productDetails/ProductDetail';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<div>
			<ProductDetail />
		</div>
	);
};

export default ProductDetails;
