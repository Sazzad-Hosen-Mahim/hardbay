import ProductContent from './ProductContent';
import { Product } from '@/types/ProductInterface';

interface ProductCardGridProps {
	product: Product;
}

const ProductCardGrid = ({ product }: ProductCardGridProps) => {
	const { images, productName } = product;
	console.log(product, 'product in ProductCardGrid');
	return (
		<div className="flex flex-col h-full border rounded-xs overflow-hidden">
			<img
				src={images[0]}
				alt={productName}
				// alt={productName}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4 flex flex-col flex-grow">
				<ProductContent product={product} />
			</div>
		</div>
	);
};

export default ProductCardGrid;
