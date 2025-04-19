
 
import { Product } from './product';
import { formatPrice } from './cartUtils';

interface ProductItemProps {
  product: Product;
  selected: boolean;
  onSelect: (product: Product, selected: boolean) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, selected, onSelect }) => {
  return (
    <div className="flex items-center p-2 hover:bg-gray-50">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onSelect(product, e.target.checked)}
        className="h-4 w-4 text-blue-600 rounded"
      />
      <span className="ml-3 flex-grow text-sm">{product.name}</span>
      <span className="text-sm font-medium">{formatPrice(product.price)}</span>
    </div>
  );
};

export default ProductItem;