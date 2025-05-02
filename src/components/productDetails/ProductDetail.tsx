import { Product } from '@/types/ProductInterface';
import { Link } from 'react-router-dom';

const ProductDetails = ({ productData }: { productData: Product }) => {
	// const [selectedImage, setSelectedImage] = useState(0);
	console.log(productData, 'productData in ProductDetails');
	const {
		productName,
		available,
		description,
		//images,
		keyApplications,
		keyFeatures,
	} = productData;

	if (!productData) {
		return <div>No product found.</div>;
	}
	return (
		<div className="mx-auto max-w-7xl p-4 font-sans">
			<div className="mb-6 border-b border-gray-200 pb-4">
				<h1 className="mb-2 flex items-center gap-2 text-2xl font-semibold">
					{productName}{' '}
					<span className="text-lg font-medium text-blue-800">
						{available ? 'Available' : 'Not Available'}
					</span>
				</h1>
				<p className="text-gray-600">{description}</p>
			</div>

			<div className="grid gap-8 md:grid-cols-2">
				<div className="flex flex-col-reverse gap-4 md:flex-row">
					{/* Thumbnails */}
					{/* <div className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
						{productData.images.map((image, index) => (
							<div
								key={image.id}
								className={`flex-shrink-0 cursor-pointer overflow-hidden rounded ${
									selectedImage === index
										? 'ring-2 ring-blue-800'
										: 'border border-gray-200'
								}`}
								onClick={() => setSelectedImage(index)}
							>
								<img
									src={image.src || '/placeholder.svg'}
									alt={image.alt}
									className="h-16 w-16 object-cover"
								/>
							</div>
						))}
					</div> */}

					{/* Main Image */}
					{/* <div className="flex-grow overflow-hidden rounded border border-gray-200">
						<img
							src={productData.images[selectedImage].src || '/placeholder.svg'}
							alt={productData.images[selectedImage].alt}
							className="h-1/2 w-1/2 object-contain"
						/>
					</div> */}
				</div>

				<div className="flex flex-col gap-6">
					{/* Key Applications */}
					<div>
						<h2 className="mb-3 text-lg font-semibold">Key Applications</h2>
						<ol className="space-y-2 list-decimal pl-6">
							{keyApplications.map((app, index) => (
								<li key={index} className="leading-relaxed">
									<span>{app}</span>
								</li>
							))}
						</ol>
					</div>

					{/* Key Features */}
					<div>
						<h2 className="mb-3 text-lg font-semibold">Key Features</h2>
						<ol className="list-decimal space-y-2 pl-6">
							{keyFeatures.map((feature, index) => (
								<li key={index} className="leading-relaxed">
									{feature}
								</li>
							))}
						</ol>
					</div>

					{/* Actions */}
					<div className="mt-4 flex justify-between items-center gap-4">
						<Link to={`/cart`}>
							<button className="rounded bg-primary-orange px-4 py-2 font-medium text-white transition hover:bg-primary-orange/70">
								Get Pricing
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
