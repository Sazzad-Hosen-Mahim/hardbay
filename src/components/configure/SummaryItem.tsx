import React from 'react';
import { CartItem } from './product';
import { formatPrice } from './cartUtils';

interface SummaryItemProps {
  item: CartItem;
}

const SummaryItem: React.FC<SummaryItemProps> = ({ item }) => {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex-1">
        <p className="text-sm text-gray-700">{item.name}</p>
      </div>
      <div className="flex-none text-right">
        <span className="inline-block w-8 text-sm text-gray-500">x{item.quantity}</span>
        <span className="ml-4 text-sm font-medium text-gray-900">{formatPrice(item.price * item.quantity)}</span>
      </div>
    </div>
  );
};

export default SummaryItem;