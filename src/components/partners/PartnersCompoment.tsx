import React, { useState } from 'react';
import { Grid, List, ChevronUp, ChevronDown, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  partner: string;
  keyFeatures: {
    formFactor: string;
    capacity: string;
    dataTransferSpeed: string;
    rotationSpeed: string;
    interface: string;
  };
  price: {
    withTax: number;
    withoutTax: number;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "TOSHIBA MG04 2TB 3.5\" SAS 12GB/S 7200 RPM 512e",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    partner: "TOSHIBA",
    keyFeatures: {
      formFactor: "3.5\"",
      capacity: "2TB",
      dataTransferSpeed: "205 MB/s",
      rotationSpeed: "7200 rpm",
      interface: "SAS: 12.0 Gbit/s"
    },
    price: {
      withTax: 134.40,
      withoutTax: 112.00
    }
  },
  {
    id: 2,
    name: "NVIDIA A100 GPU Accelerator",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    partner: "NVIDIA",
    keyFeatures: {
      formFactor: "PCIe",
      capacity: "80GB HBM2e",
      dataTransferSpeed: "2TB/s",
      rotationSpeed: "N/A",
      interface: "PCIe 4.0"
    },
    price: {
      withTax: 12000.00,
      withoutTax: 10000.00
    }
  },
  {
    id: 3,
    name: "AMD EPYC 7763 64-Core Processor",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    partner: "AMD",
    keyFeatures: {
      formFactor: "SP3",
      capacity: "256MB L3 Cache",
      dataTransferSpeed: "204.8 GB/s",
      rotationSpeed: "N/A",
      interface: "PCIe 4.0"
    },
    price: {
      withTax: 8400.00,
      withoutTax: 7000.00
    }
  }
];

interface FilterSection {
  title: string;
  items: { label: string; count: number }[];
}

const filterSections: FilterSection[] = [
  {
    title: "PARTNERS",
    items: [
      { label: "NVIDIA", count: 12 },
      { label: "MICRON", count: 8 },
      { label: "SUPERMICRO", count: 15 },
      { label: "GIGABYTE", count: 10 },
      { label: "ASUS", count: 14 },
      { label: "WEKAIO", count: 6 },
      { label: "INTEL", count: 18 },
      { label: "AMD", count: 16 },
      { label: "TOSHIBA", count: 9 }
    ]
  },
  {
    title: "INTERFACE",
    items: [
      { label: "SAS", count: 9 },
      { label: "SATA", count: 11 },
      { label: "PCIe", count: 15 },
      { label: "NVMe", count: 8 }
    ]
  },
  {
    title: "SUSTAINED DATA RATE",
    items: [
      { label: "200-210", count: 1 },
      { label: "211-220", count: 1 },
      { label: "241-250", count: 8 },
      { label: "251-260", count: 4 },
      { label: "261-270", count: 5 }
    ]
  },
  {
    title: "FORM FACTOR",
    items: [
      { label: "3.5 Inch", count: 20 },
      { label: "PCIe", count: 15 },
      { label: "DIMM", count: 8 }
    ]
  },
  {
    title: "CAPACITY",
    items: [
      { label: "2 TB", count: 2 },
      { label: "4 TB", count: 3 },
      { label: "6 TB", count: 4 },
      { label: "8 TB", count: 5 },
      { label: "10 TB", count: 3 },
      { label: "12 TB", count: 2 }
    ]
  }
];

function App() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('position');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [expandedSections, setExpandedSections] = useState<string[]>(filterSections.map(section => section.title));
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const toggleSection = (title: string) => {
    setExpandedSections(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const togglePartner = (partner: string) => {
    setSelectedPartners(prev => 
      prev.includes(partner)
        ? prev.filter(p => p !== partner)
        : [...prev, partner]
    );
  };

  const filteredProducts = products.filter(product => 
    selectedPartners.length === 0 || selectedPartners.includes(product.partner)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">PARTNERS</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            {filterSections.map((section) => (
              <div key={section.title} className="mb-6">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-left font-semibold mb-2 hover:text-blue-600"
                >
                  <span>{section.title}</span>
                  <ChevronRight 
                    size={20}
                    className={`transform transition-transform ${
                      expandedSections.includes(section.title) ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {expandedSections.includes(section.title) && (
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <label 
                        key={item.label} 
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input 
                          type="checkbox" 
                          className="rounded border-gray-300"
                          checked={section.title === "PARTNERS" ? selectedPartners.includes(item.label) : false}
                          onChange={() => section.title === "PARTNERS" && togglePartner(item.label)}
                        />
                        <span className="text-sm">{item.label}</span>
                        <span className="text-sm text-gray-500">({item.count})</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Sort By:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded p-2"
                  >
                    <option value="position">Position</option>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                  </select>
                  <button 
                    onClick={toggleSortDirection}
                    className="p-2 hover:bg-gray-100 rounded"
                  >
                    {sortDirection === 'asc' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Show:</span>
                  <select 
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="border rounded p-2"
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                  >
                    <Grid size={20} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'grid-cols-1 gap-4'}`}>
              {filteredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className={`flex ${viewMode === 'grid' ? 'flex-col' : 'flex-row gap-6'}`}>
                    <div className={`${viewMode === 'grid' ? 'mb-4' : 'w-1/3'}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-auto object-cover rounded"
                      />
                    </div>
                    <div className={viewMode === 'list' ? 'w-2/3' : ''}>
                      <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
                      <div className="space-y-2 mb-4">
                        <h3 className="font-semibold">Key Features</h3>
                        <div className="grid grid-cols-2 gap-2">
                          <div>Form Factor:</div>
                          <div>{product.keyFeatures.formFactor}</div>
                          <div>Capacity:</div>
                          <div>{product.keyFeatures.capacity}</div>
                          <div>Data Transfer Speed:</div>
                          <div>{product.keyFeatures.dataTransferSpeed}</div>
                          <div>Rotation Speed:</div>
                          <div>{product.keyFeatures.rotationSpeed}</div>
                          <div>Interface:</div>
                          <div>{product.keyFeatures.interface}</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-semibold">
                          Inc. Vat £{product.price.withTax.toFixed(2)}
                        </div>
                        <div className="text-gray-600">
                          Excl. Tax: £{product.price.withoutTax.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;