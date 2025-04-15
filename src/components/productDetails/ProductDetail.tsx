'use client';

import { useState } from 'react';
import { Database, Cloud, FileText, Cpu, HardDrive } from 'lucide-react';
import img1 from '@/assets/products/1.webp';
import img2 from '@/assets/products/2.webp';
import img3 from '@/assets/products/3.webp';
import img4 from '@/assets/products/4.webp';
import img5 from '@/assets/products/5.webp';
import img6 from '@/assets/products/6.webp';
import img7 from '@/assets/products/7.webp';

// Define the product data
const productData = {
	name: 'Storage SuperServer SSG-542B-E1CR60',
	status: 'Coming Soon',
	description:
		'4U top-loading storage server with 60 hot-swap 3.5" SAS/SATA bays and PCIe 5.0',
	images: [
		{
			id: 1,
			src: img1,
			alt: 'Front view of server',
		},
		{
			id: 2,
			src: img2,
			alt: 'Top view of server',
		},
		{
			id: 3,
			src: img3,
			alt: 'Drive bay view of server',
		},
		{
			id: 4,
			src: img4,
			alt: 'Internal view of server',
		},
		{
			id: 5,
			src: img5,
			alt: 'Rear view of server',
		},
		{
			id: 6,
			src: img6,
			alt: 'Rear view of server',
		},
		{
			id: 7,
			src: img7,
			alt: 'Rear view of server',
		},
	],
	applications: [
		{
			id: 1,
			text: 'Big Data & Analytics, Data Lake',
			icon: <Database className="h-4 w-4" />,
		},
		{
			id: 2,
			text: 'Telco & Cloud Service Providers',
			icon: <Cloud className="h-4 w-4" />,
		},
		{
			id: 3,
			text: 'Content Repositories',
			icon: <FileText className="h-4 w-4" />,
		},
		{
			id: 4,
			text: 'HPC and AI/ML Workloads',
			icon: <Cpu className="h-4 w-4" />,
		},
		{
			id: 5,
			text: 'Financial Services & Healthcare Image Archives',
			icon: <HardDrive className="h-4 w-4" />,
		},
		{
			id: 6,
			text: 'Government Data Protection',
			icon: <Database className="h-4 w-4" />,
		},
	],
	features: [
		'Intel® Xeon® 6700-series processors with E-cores, Single Socket LGA-4710 (Socket E2) supported, CPU TDP supports Up to 350W TDP',
		'Up to 2TB ECC RDIMM, DDR5-6400MT/s (1DPC) or DDR5-5200MT/s (2DPC) in 16 DIMM slots',
		'1 PCIe 5.0 x8 and 3 PCIe 5.0 x16 HHHL',
		'60 3.5"/2.5" Hot-swap SAS3/SATA3 drives, 2 2.5" Hot-swap Gen4 NVMe',
		'Drive Controller support via Broadcom® 3916 or 3816',
		'2000W Redundant Power Supplies Titanium Level (96%)',
	],
};

const ProductDetails = () => {
	const [selectedImage, setSelectedImage] = useState(0);
	return (
		<div className="mx-auto max-w-7xl p-4 font-sans">
			<div className="mb-6 border-b border-gray-200 pb-4">
				<h1 className="mb-2 flex items-center gap-2 text-2xl font-semibold">
					{productData.name}{' '}
					<span className="text-lg font-medium text-blue-800">
						{productData.status}
					</span>
				</h1>
				<p className="text-gray-600">{productData.description}</p>
			</div>

			<div className="grid gap-8 md:grid-cols-2">
				<div className="flex flex-col-reverse gap-4 md:flex-row">
					{/* Thumbnails */}
					<div className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
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
					</div>

					{/* Main Image */}
					<div className="flex-grow overflow-hidden rounded border border-gray-200">
						<img
							src={productData.images[selectedImage].src || '/placeholder.svg'}
							alt={productData.images[selectedImage].alt}
							className="h-full w-full object-contain"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-6">
					{/* Key Applications */}
					<div>
						<h2 className="mb-3 text-lg font-semibold">Key Applications</h2>
						<ul className="space-y-2">
							{productData.applications.map(app => (
								<li key={app.id} className="flex items-start gap-2">
									<span className="mt-0.5 text-blue-800">{app.icon}</span>
									<span>{app.text}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Key Features */}
					<div>
						<h2 className="mb-3 text-lg font-semibold">Key Features</h2>
						<ol className="list-decimal space-y-2 pl-6">
							{productData.features.map((feature, index) => (
								<li key={index} className="leading-relaxed">
									{feature}
								</li>
							))}
						</ol>
					</div>

					{/* Actions */}
					<div className="mt-4 flex justify-between items-center gap-4">
						<button className="rounded bg-primary-orange px-4 py-2 font-medium text-white transition hover:bg-primary-orange/70">
							Get Pricing
						</button>
						<div className="flex items-center gap-2">
							<input type="checkbox" id="compare" className="h-4 w-4" />
							<label htmlFor="compare" className="text-gray-700">
								Compare
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
