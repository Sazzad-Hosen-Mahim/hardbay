export interface Product {
    id: string;
    name: string;
    price: number;
    taxRate: number;
    category: 'memory' | 'ssd' | 'hdd';
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }