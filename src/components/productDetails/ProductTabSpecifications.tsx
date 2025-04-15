'use client';

import { useState } from 'react';
import { AlertTriangle, Download } from 'lucide-react';
import CommonWrapper from '@/common/CommonWrapper';

type TabType = 'specifications' | 'resources';

const ProductTabSpecifications = () => {
	const [activeTab, setActiveTab] = useState<TabType>('specifications');

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
					<button
						onClick={() => setActiveTab('resources')}
						className={`flex items-center gap-2 px-4 py-2 font-medium ${
							activeTab === 'resources'
								? 'border-b-2 border-primary-orange text-primary-orange'
								: 'text-gray-600 hover:text-gray-800'
						}`}
					>
						<Download className="h-4 w-4" /> Resources & Downloads
					</button>
				</div>
				<div className="py-6">
					{activeTab === 'specifications' ? (
						<SpecificationsContent />
					) : (
						<ResourcesContent />
					)}
				</div>
			</div>
		</CommonWrapper>
	);
};

const SpecificationsContent = () => {
	return (
		<CommonWrapper>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{/* Product SKUs Section */}
				<div>
					<div className="bg-blue-500 px-4 py-2 text-white">
						<h3 className="font-medium">Product SKUs</h3>
					</div>
					<div className="border border-gray-200">
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">SuperServer</div>
							<div className="p-3">SSG-542B-E1CR60</div>
						</div>
					</div>
				</div>

				{/* Motherboard Section */}
				<div>
					<div className="bg-blue-500 px-4 py-2 text-white">
						<h3 className="font-medium">Motherboard</h3>
					</div>
					<div className="border border-gray-200">
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Super</div>
							<div className="p-3">X14SBSC</div>
						</div>
					</div>
				</div>

				{/* Processor Section */}
				<div>
					<div className="bg-blue-500 px-4 py-2 text-white">
						<h3 className="font-medium">Processor</h3>
					</div>
					<div className="border border-gray-200">
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">CPU</div>
							<div className="p-3">
								<div>Single Socket E2 (LGA-4710)</div>
								<div className="text-blue-600">
									Intel® Xeon® 6700/6500 series processors with P-cores or 6700
									series processors with E-cores
								</div>
							</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Core Count</div>
							<div className="p-3">Up to 144C/144T; Up to 108MB Cache</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Note</div>
							<div className="p-3">
								Supports up to 350W TDP CPUs (Air Cooled)
							</div>
						</div>
					</div>
				</div>

				{/* System Memory Section */}
				<div>
					<div className="bg-blue-500 px-4 py-2 text-white">
						<h3 className="font-medium">System Memory</h3>
					</div>
					<div className="border border-gray-200">
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Memory</div>
							<div className="p-3">
								<div>Slot Count: 16 DIMM slots</div>
								<div>Max Memory (1DPC): Up to 2TB 6400MT/s ECC DDR5 RDIMM</div>
								<div>Max Memory (2DPC): Up to 2TB 5200MT/s ECC DDR5 RDIMM</div>
								<div className="text-blue-600">View Memory Options &gt;</div>
							</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Memory Voltage</div>
							<div className="p-3">1.1V</div>
						</div>
					</div>
				</div>

				{/* On-Board Devices Section */}
				<div>
					<div className="bg-blue-500 px-4 py-2 text-white">
						<h3 className="font-medium">On-Board Devices</h3>
					</div>
					<div className="border border-gray-200">
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">NVMe</div>
							<div className="p-3">NVMe; RAID 0/1 support</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Chipset</div>
							<div className="p-3">System on Chip</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Network Connectivity</div>
							<div className="p-3">
								<div>No NIC option supported</div>
								<div className="text-blue-600">View AOC Options &gt;</div>
							</div>
						</div>
					</div>
				</div>

				{/* Input/Output Section */}
				<div>
					<div className="bg-blue-500 px-4 py-2 text-white">
						<h3 className="font-medium">Input / Output</h3>
					</div>
					<div className="border border-gray-200">
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">LAN</div>
							<div className="p-3">1 RJ45 1 GbE Dedicated BMC LAN port</div>
						</div>
					</div>
				</div>

				{/* Chassis Section */}

				<div>
					<div className="bg-blue-500 px-4 py-2 text-white">
						<h3 className="font-medium">Chassis</h3>
					</div>
					<div className="border border-gray-200">
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Form Factor</div>
							<div className="p-3">4U Rackmount</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Model</div>
							<div className="p-3">CSE-947STS-R2K05P</div>
						</div>
					</div>
				</div>

				{/* Dimensions and Weight Section */}
				<div>
					<div className="bg-blue-500 px-4 py-2 text-white">
						<h3 className="font-medium">Dimensions and Weight</h3>
					</div>
					<div className="border border-gray-200">
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Height</div>
							<div className="p-3">6.96" (177 mm)</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Width</div>
							<div className="p-3">17.6" (447 mm)</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Depth</div>
							<div className="p-3">32" (813 mm)</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Package</div>
							<div className="p-3">N/A</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Weight</div>
							<div className="p-3">
								<div>Gross Weight: 170 lbs (77.11 kg)</div>
								<div>Net Weight: 107 lbs (48.53 kg)</div>
							</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">
								Palletized Packing (W x H x L)
							</div>
							<div className="p-3">
								35.82" (805 mm) x 29.92" (755 mm) x 53.15" (1135 mm)
							</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Available Color</div>
							<div className="p-3">N/A</div>
						</div>
					</div>
				</div>

				{/* Expansion Slots Section */}
				<div>
					<div className="bg-blue-500 px-4 py-2 text-white">
						<h3 className="font-medium">Expansion Slots</h3>
					</div>
					<div className="border border-gray-200">
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">
								PCI-Express (PCIe) Configuration
							</div>
							<div className="p-3">
								<div>Default</div>
								<div>1 PCIe 5.0 x8 (in x8) HHHL slot</div>
								<div>3 PCIe 5.0 x16 (in x16) HHHL slots</div>
								<div className="text-blue-600">View AOC Options &gt;</div>
							</div>
						</div>
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">M.2</div>
							<div className="p-3">
								2 M.2 PCIe 4.0 x2 NVMe slots (M-key 2280/22110)
							</div>
						</div>
					</div>
				</div>

				{/* Drive Bays / Storage Section */}
				<div>
					<div className="bg-blue-500 px-4 py-2 text-white">
						<h3 className="font-medium">Drive Bays / Storage</h3>
					</div>
					<div className="border border-gray-200">
						<div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
							<div className="p-3 font-medium">Drive Bays Configuration</div>
							<div className="p-3">
								<div>Default: Total 60 bays</div>
								<div>60 top-loading hot-swap 3.5"/2.5" SAS/SATA drive bays</div>
								<div>Option A: Total 4 bays</div>
								<div>4 rear hot-swap 2.5" PCIe 4.0 x4 NVMe* drive bays</div>
								<div>Option B: Total 2 bays</div>
								<div>2 internal fixed 2.5" PCIe 5.0 x4 NVMe* drive bays</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</CommonWrapper>
	);
};

const ResourcesContent = () => {
	const [osManufacturer, setOsManufacturer] = useState('');
	const [os, setOs] = useState('');
	const [componentType, setComponentType] = useState('');
	return (
		<CommonWrapper>
			<div className="space-y-6">
				{/* BIOS Downloads */}
				<div className="rounded border border-gray-200 p-6">
					<div className="flex flex-col gap-4 md:flex-row md:items-start">
						<div className="flex-shrink-0">
							<div className="h-16 w-16">
								<svg
									viewBox="0 0 24 24"
									className="h-full w-full"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="4"
										y="4"
										width="16"
										height="16"
										stroke="black"
										strokeWidth="1.5"
										fill="none"
									/>
									<path
										d="M7 4V1M11 4V1M15 4V1M19 4V1"
										stroke="black"
										strokeWidth="1.5"
									/>
									<path
										d="M7 20v3M11 20v3M15 20v3M19 20v3"
										stroke="black"
										strokeWidth="1.5"
									/>
									<path
										d="M4 7H1M4 11H1M4 15H1M4 19H1"
										stroke="black"
										strokeWidth="1.5"
									/>
									<path
										d="M20 7h3M20 11h3M20 15h3M20 19h3"
										stroke="black"
										strokeWidth="1.5"
									/>
									<path d="M9 12h6M12 9v6" stroke="black" strokeWidth="1.5" />
								</svg>
							</div>
						</div>
						<div className="flex-grow space-y-4">
							<div>
								<h3 className="text-lg font-bold">BIOS Downloads</h3>
								<p className="text-sm">
									Click the button to download the latest BIOS for this product.
									If you are looking for an older-revision BIOS, please contact
									our technical support.
								</p>
							</div>
							<div className="flex items-start gap-2 rounded-md bg-amber-50 p-3 text-sm">
								<AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
								<p className="text-gray-700">
									* Please do not download / upgrade the BIOS/Firmware UNLESS
									your system has a BIOS/Firmware-related issue. Flashing the
									wrong BIOS/Firmware can cause irreparable damage to the
									system. In no event shall Supermicro be liable for direct,
									indirect, special, incidental, or consequential damages
									arising from a BIOS/Firmware update.
								</p>
							</div>
						</div>
						<div className="flex-shrink-0 self-center md:self-start">
							<button className="rounded bg-primary-orange px-6 py-2 text-white hover:bg-primary-orange/70">
								Download
							</button>
						</div>
					</div>
				</div>

				{/* BMC Firmware Downloads */}
				<div className="rounded border border-gray-200 p-6">
					<div className="flex flex-col gap-4 md:flex-row md:items-start">
						<div className="flex-shrink-0">
							<div className="h-16 w-16">
								<svg
									viewBox="0 0 24 24"
									className="h-full w-full"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="4"
										y="4"
										width="16"
										height="16"
										stroke="black"
										strokeWidth="1.5"
										fill="none"
									/>
									<path
										d="M7 4V1M11 4V1M15 4V1M19 4V1"
										stroke="black"
										strokeWidth="1.5"
									/>
									<circle
										cx="12"
										cy="14"
										r="4"
										stroke="black"
										strokeWidth="1.5"
										fill="none"
									/>
									<path d="M12 12v2h2" stroke="black" strokeWidth="1.5" />
								</svg>
							</div>
						</div>
						<div className="flex-grow space-y-4">
							<div>
								<h3 className="text-lg font-bold">BMC Firmware Downloads</h3>
								<p className="text-sm">
									Click the button to download the latest BMC firmware for this
									product. If you are looking for an older-revision BIOS, please
									contact our technical support.
								</p>
							</div>
							<div className="flex items-start gap-2 rounded-md bg-amber-50 p-3 text-sm">
								<AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
								<p className="text-gray-700">
									* Please do not download / upgrade the BMC/Firmware UNLESS
									your system has a BMC/Firmware-related issue. Flashing the
									wrong BMC/Firmware can cause irreparable damage to the system.
									In no event shall Supermicro be liable for direct, indirect,
									special, incidental, or consequential damages arising from a
									BMC/Firmware update.
								</p>
							</div>
						</div>
						<div className="flex-shrink-0 self-center md:self-start">
							<button className="rounded bg-primary-orange px-6 py-2 text-white hover:bg-primary-orange/70">
								Download
							</button>
						</div>
					</div>
				</div>

				{/* Drivers & Utilities */}
				<div className="rounded border border-gray-200 p-6">
					<div className="flex flex-col gap-4 md:flex-row md:items-start">
						<div className="flex-shrink-0">
							<div className="h-16 w-16">
								<svg
									viewBox="0 0 24 24"
									className="h-full w-full"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
										stroke="black"
										strokeWidth="1.5"
										fill="none"
									/>
								</svg>
							</div>
						</div>
						<div className="flex-grow space-y-4">
							<div>
								<h3 className="text-lg font-bold">Drivers & Utilities</h3>
								<p className="text-sm">
									In order to locate a driver/utility, please select your
									Operating System and Device Type below: (for OS supported,
									please refer to{' '}
									<a href="#" className="text-blue-600 hover:underline">
										OS Compatibility
									</a>
									)
								</p>
							</div>
							<div className="grid gap-4 md:grid-cols-2">
								<div className="space-y-4 md:col-span-2 lg:col-span-1">
									<div className="relative">
										<select
											className="w-full appearance-none rounded border border-gray-300 bg-white p-2 pr-8 text-gray-700"
											value={osManufacturer}
											onChange={e => setOsManufacturer(e.target.value)}
										>
											<option value="">Select a OS Manufacturer</option>
											<option value="microsoft">Microsoft</option>
											<option value="apple">Apple</option>
											<option value="linux">Linux</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg
												className="h-4 w-4 fill-current"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</div>
									</div>

									<div className="relative">
										<select
											className="w-full appearance-none rounded border border-gray-300 bg-white p-2 pr-8 text-gray-700"
											value={os}
											onChange={e => setOs(e.target.value)}
										>
											<option value="">Select OS</option>
											<option value="windows11">Windows 11</option>
											<option value="windows10">Windows 10</option>
											<option value="linux">Linux</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg
												className="h-4 w-4 fill-current"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</div>
									</div>

									<div className="relative">
										<select
											className="w-full appearance-none rounded border border-gray-300 bg-white p-2 pr-8 text-gray-700"
											value={componentType}
											onChange={e => setComponentType(e.target.value)}
										>
											<option value="">Select Component Type</option>
											<option value="chipset">Chipset</option>
											<option value="network">Network</option>
											<option value="storage">Storage</option>
										</select>
										<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
											<svg
												className="h-4 w-4 fill-current"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
											>
												<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
											</svg>
										</div>
									</div>
								</div>
								<div className="flex items-end justify-end">
									<button className="rounded bg-primary-orange px-6 py-2 text-white hover:bg-primary-orange/70">
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Motherboard-related FAQs */}
				<div className="rounded border border-gray-200 p-6">
					<div className="flex flex-col gap-4 md:flex-row md:items-center">
						<div className="flex-shrink-0">
							<div className="h-16 w-16">
								<svg
									viewBox="0 0 24 24"
									className="h-full w-full"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="12"
										cy="12"
										r="10"
										stroke="black"
										strokeWidth="1.5"
										fill="none"
									/>
									<path
										d="M12 16v.01"
										stroke="black"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
									<path
										d="M12 13a1.5 1.5 0 0 1-1-2.62A1.5 1.5 0 0 1 12 7.5a1.5 1.5 0 0 1 1 2.88 1.5 1.5 0 0 1-1 2.62"
										stroke="black"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
								</svg>
							</div>
						</div>
						<div className="flex-grow">
							<h3 className="text-lg font-bold">Motherboard-related FAQs</h3>
							<p className="text-sm">Check out FAQs related to X14SBSC.</p>
						</div>
						<div className="flex-shrink-0">
							<button className="rounded bg-primary-orange px-6 py-2 text-white hover:bg-primary-orange/70">
								Search
							</button>
						</div>
					</div>
				</div>

				{/* SSG-542B-E1CR60 Specific FAQs */}
				<div className="rounded border border-gray-200 p-6">
					<div className="flex flex-col gap-4 md:flex-row md:items-center">
						<div className="flex-shrink-0">
							<div className="h-16 w-16">
								<svg
									viewBox="0 0 24 24"
									className="h-full w-full"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<circle
										cx="12"
										cy="12"
										r="10"
										stroke="black"
										strokeWidth="1.5"
										fill="none"
									/>
									<path
										d="M12 16v.01"
										stroke="black"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
									<path
										d="M12 13a1.5 1.5 0 0 1-1-2.62A1.5 1.5 0 0 1 12 7.5a1.5 1.5 0 0 1 1 2.88 1.5 1.5 0 0 1-1 2.62"
										stroke="black"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
								</svg>
							</div>
						</div>
						<div className="flex-grow">
							<h3 className="text-lg font-bold">
								SSG-542B-E1CR60 Specific FAQs
							</h3>
							<p className="text-sm">
								Check out FAQs related to SSG-542B-E1CR60's chipset family or
								specific FAQs regarding SSG-542B-E1CR60.
							</p>
						</div>
						<div className="flex-shrink-0">
							<button className="rounded bg-primary-orange px-6 py-2 text-white hover:bg-primary-orange/70">
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
		</CommonWrapper>
	);
};

export default ProductTabSpecifications;
