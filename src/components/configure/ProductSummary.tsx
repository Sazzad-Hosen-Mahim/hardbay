

import { CartItem } from './product';
import { formatPrice, calculateTotal } from './cartUtils';
import { Link } from 'react-router-dom';

interface ProductSummaryProps {
  items: CartItem[];
}

const ProductSummary: React.FC<ProductSummaryProps> = ({ items }) => {
  const total = calculateTotal(items);

  return (
    <div className="border rounded-lg shadow-sm bg-white p-4">
      <h3 className="font-medium mb-3">Selected Items</h3>
      <div className="space-y-2 mb-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>{item.name}</span>
            <span className="font-medium">{formatPrice(item.price)}</span>
          </div>
        ))}
      </div>
      <div className="border-t pt-3">
        <div className="flex justify-between">
          <span className="font-medium">Total</span>
          <span className="font-bold">{formatPrice(total)}</span>
        </div>
      </div>
   <Link to="/cart">
   <button className="w-full cursor-pointer mt-4 bg-primary-blue text-white py-2 rounded-md hover:bg-primary-orange">
    
    Add to Cart
  </button>
   </Link>
    </div>
  );
};

export default ProductSummary;