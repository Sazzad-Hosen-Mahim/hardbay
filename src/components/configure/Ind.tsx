import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './product';
import ProductCategory from './ProductCategory';
import ProductSummary from './ProductSummary';
import { products } from './Products';

const ProductConfigurator: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const categories = {
    memory: products.filter(p => p.category === 'memory'),
    ssd: products.filter(p => p.category === 'ssd'),
    hdd: products.filter(p => p.category === 'hdd')
  };

  useEffect(() => {
    const items = products
      .filter(p => selectedProducts.has(p.id))
      .map(p => ({ ...p, quantity: 1 }));
    setCartItems(items);
  }, [selectedProducts]);

  const handleProductSelect = (product: Product, selected: boolean) => {
    const newSelected = new Set(selectedProducts);
    selected ? newSelected.add(product.id) : newSelected.delete(product.id);
    setSelectedProducts(newSelected);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        {Object.entries(categories).map(([category, items]) => (
          <ProductCategory
            key={category}
            title={category.charAt(0).toUpperCase() + category.slice(1)}
            products={items}
            selectedProducts={selectedProducts}
            onProductSelect={handleProductSelect}
          />
        ))}
      </div>
      <div>
        <ProductSummary items={cartItems} />
      </div>
    </div>
  );
};

export default ProductConfigurator;