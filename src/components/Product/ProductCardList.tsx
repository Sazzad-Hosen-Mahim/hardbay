import ProductContent from './ProductContent';
import { Product } from '@/types/ProductInterface';

interface ProductCardListProps {
	product: Product;
}

const ProductCardList = ({ product }: ProductCardListProps) => {
	console.log(product, 'product in ProductCardList');
	const { id, title, description, price, images } = product;
	return (
		<div className="flex border rounded-xs overflow-hidden">
			<img
				src={images}
				alt={title}
				className="w-1/3 object-cover min-w-[200px]"
			/>
			<div className="w-2/3 p-4">
				<ProductContent product={product} />
			</div>
		</div>
	);
};

export default ProductCardList;
