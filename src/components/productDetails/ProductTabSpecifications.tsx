"use client";
import { useState } from "react";
import CommonWrapper from "@/common/CommonWrapper";

const ProductTabSpecifications = (product) => {
  const [activeTab, setActiveTab] = useState("specifications");

  console.log(product, "product from tab specifications");

  return (
    <CommonWrapper>
      <div className="mt-10">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("specifications")}
            className={`relative px-4 py-2 font-medium ${
              activeTab === "specifications"
                ? "border-b-2 border-primary-orange text-primary-orange"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Specifications
          </button>
        </div>
        <div className="py-6">
          {activeTab === "specifications" ? <SpecificationsContent /> : ""}
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
          <div className="bg-primary-blue px-4 py-2 text-white">
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
          <div className="bg-primary-blue px-4 py-2 text-white">
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
          <div className="bg-primary-blue px-4 py-2 text-white">
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
          <div className="bg-primary-blue px-4 py-2 text-white">
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
          <div className="bg-primary-blue px-4 py-2 text-white">
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
          <div className="bg-primary-blue px-4 py-2 text-white">
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
          <div className="bg-primary-blue px-4 py-2 text-white">
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
          <div className="bg-primary-blue px-4 py-2 text-white">
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
          <div className="bg-primary-blue px-4 py-2 text-white">
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
          <div className="bg-primary-blue px-4 py-2 text-white">
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

export default ProductTabSpecifications;
