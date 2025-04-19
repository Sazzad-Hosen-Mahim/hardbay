import { Product } from './product';
import ProductItem from './ProductItem';

interface ProductCategoryProps {
  title: string;
  products: Product[];
  selectedProducts: Set<string>;
  onProductSelect: (product: Product, selected: boolean) => void;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
  title,
  products,
  selectedProducts,
  onProductSelect,
}) => {
  return (
    <div className="border rounded-lg shadow-sm bg-white">
      <div className="p-3 border-b bg-gray-50">
        <h3 className="font-medium uppercase text-primary-orange">{title}</h3>
      </div>
      <div className="divide-y">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            selected={selectedProducts.has(product.id)}
            onSelect={onProductSelect}
          />    
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;