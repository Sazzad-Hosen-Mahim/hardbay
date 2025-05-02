import ProductContent from './ProductContent';
import { Product } from '@/types/ProductInterface';

interface ProductCardListProps {
	product: Product;
}

const ProductCardList = ({ product }: ProductCardListProps) => {
	// console.log(product, 'product in ProductCardList');
	const { id, productName, description, price, images } = product;
	return (
		<div className="flex border rounded-xs overflow-hidden">
			<img
				src={images[0].src}
				alt={productName}
				className="w-1/3 object-cover min-w-[200px]"
			/>
			<div className="w-2/3 p-4">
				<ProductContent product={product} />
			</div>
		</div>
	);
};

export default ProductCardList;
