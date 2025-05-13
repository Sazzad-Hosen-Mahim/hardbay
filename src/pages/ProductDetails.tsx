import ProductDetail from '@/components/productDetails/ProductDetail';
import ProductTabSpecifications from '@/components/productDetails/ProductTabSpecifications';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchProductDetails } from '@/store/Slices/ProductSlice/productDetailsSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const { product, loading } = useAppSelector(state => state.productDetails);

	useEffect(() => {
		dispatch(fetchProductDetails(id as string));
	}, [dispatch, id]);

	if (loading) {
		return (
			<div className="text-center mt-16 h-screen w-full flex items-center justify-center">
				<svg
					className="animate-spin h-10 w-10 text-primary-orange"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M12 2a1 1 0 011 1v1.07a7.967 7.967 0 013.39.99l.76-.76a1 1 0 011.41 1.41l-.76.76c.63 1.02.99 2.2.99 3.39H21a1 1 0 110 2h-1.07a7.967 7.967 0 01-.99 3.39l.76.76a1 1 0 11-1.41 1.41l-.76-.76a7.967 7.967 0 01-3.39.99V21a1 1 0 11-2 0v-1.07a7.967 7.967 0 01-3.39-.99l-.76.76a1 1 0 01-1.41-1.41l.76-.76a7.967 7.967 0 01-.99-3.39H3a1 1 0 110-2h1.07a7.967 7.967 0 01.99-3.39l-.76-.76a1 1 0 011.41-1.41l.76.76a7.967 7.967 0 013.39-.99V3a1 1 0 011-1zm0 6a4 4 0 100 8 4 4 0 000-8z" />
				</svg>
			</div>
		);
	}

	return (
		<div>
			{product && <ProductDetail productData={product} />}
			{product && <ProductTabSpecifications productData={product} />}
		</div>
	);
};

export default ProductDetails;
