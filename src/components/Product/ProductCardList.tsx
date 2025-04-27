import ProductContent from './ProductContent';
import { Product } from '@/types/ProductInterface';

interface ProductCardListProps {
	product: Product;
}

const ProductCardList = ({ product }: ProductCardListProps) => {
	return (
		<div className="flex border rounded-xs overflow-hidden">
			<img
  src={product.images?.[0] || '/default-image.jpg'}
  alt={product.productName}
  className="w-1/3 object-cover min-w-[200px]"
/>
			<div className="w-2/3 p-4">
				<ProductContent product={product} />
			</div>
		</div>
	);
};

export default ProductCardList;
