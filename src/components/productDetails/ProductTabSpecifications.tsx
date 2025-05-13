'use client';
import { useState } from 'react';
import CommonWrapper from '@/common/CommonWrapper';
import { Product } from '@/types/ProductInterface';

const ProductTabSpecifications = ({
	productData,
}: {
	productData: Product;
}) => {
	const [activeTab, setActiveTab] = useState('specifications');

	if (!productData) {
		return <div>No product found.</div>;
	}

	return (
		<CommonWrapper>
			<div className="mt-10">
				<div className="flex border-b border-gray-200">
					<button
						onClick={() => setActiveTab('specifications')}
						className={`relative px-4 py-2 font-medium ${
							activeTab === 'specifications'
								? 'border-b-2 border-primary-orange text-primary-orange'
								: 'text-gray-600 hover:text-gray-800'
						}`}
					>
						Specifications
					</button>
				</div>
				<div className="py-6">
					{activeTab === 'specifications' ? (
						<SpecificationsContent productData={productData} />
					) : (
						''
					)}
				</div>
			</div>
		</CommonWrapper>
	);
};

const SpecificationsContent = ({ productData }: { productData: Product }) => {
	console.log(productData, 'product from tab specifications');
	const { specs } = productData;
	console.log(specs, 'specs from productData in specifications tab');
	const specsTitle = specs.map(spec => spec.title);
	console.log(specsTitle, 'specsTitle from productData in specifications tab');

	return (
		<CommonWrapper>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{/* Product SKUs Section */}
				{specs.map(spec => (
					<div key={spec.id}>
						<div className="bg-primary-blue px-4 py-2 text-white">
							<h3 className="font-medium">{spec.title}</h3>
						</div>
						<div className="border border-gray-200">
							{(
								spec as { data: { [key: string]: string | number }[] }
							)?.data.map(item => {
								for (const [key, value] of Object.entries(item)) {
									// console.log('Key: ', key, '----', 'Value: ', value);
									return (
										<div className="border border-gray-200">
											<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
												<div className="p-3 font-medium">{key}</div>
												<div className="p-3">{String(value)}</div>
											</div>
										</div>
									);
								}
							})}
						</div>
					</div>
				))}
			</div>
		</CommonWrapper>
	);
};

export default ProductTabSpecifications;
