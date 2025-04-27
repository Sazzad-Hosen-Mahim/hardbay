import { CartItem } from './product';

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const calculateItemTotal = (item: CartItem): number => {
  return item.price * item.quantity;
};

export const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + calculateItemTotal(item), 0);
};

export const calculateTax = (items: CartItem[]): number => {
  return items.reduce(
    (total, item) => total + calculateItemTotal(item) * item.taxRate,
    0
  );
};

export const getItemsFromCategory = (
  items: CartItem[],
  category: 'memory' | 'ssd' | 'hdd'
): CartItem[] => {
  return items.filter(item => item.category === category);
};   