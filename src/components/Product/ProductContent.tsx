import { Link } from 'react-router-dom';
import { Product } from '@/types/ProductInterface';

interface ProductContentProps {
	product: Product;
}

const ProductContent = ({ product }: ProductContentProps) => {
	// console.log(product, 'product in ProductContent');
	return (
		<>
			<Link to={`/service/product-details/${product.id}`}>
				<h3 className="font-bold text-lg">{product.productName}</h3>
			</Link>
			<div className="text-sm text-primary-orange">
				{new Date(product.createdAt).toLocaleDateString('en-US', {
					month: 'long',
					day: '2-digit',
					year: 'numeric',
				})}
			</div>
			<p className="text-gray-700 mb-2 line-clamp-2">{product.description}</p>
			{/* <div className="grid grid-cols-2 gap-2 text-sm mb-3"> */}
			{/* {product.specs.cpu && (
          <div>
            <span className="font-semibold">CPU:</span> {product.specs.cpu}
          </div>
        )} */}
			{/* {product.specs.gpu && (
					<div>
						<span className="font-semibold">GPU:</span> {product.specs.gpu}
					</div>
				)} */}
			{/* </div> */}
			{/* <div className="mt-auto flex justify-between items-center">
				<span className="font-bold text-lg">
					${product.price.toLocaleString()}
				</span>
				<button className="bg-primary-blue text-white px-4 py-2 rounded hover:bg-blue-700">
					{product.category === 'gpu' ? 'Rent Now' : 'Configure'}
				</button>
			</div> */}
		</>
	);
};

export default ProductContent;
