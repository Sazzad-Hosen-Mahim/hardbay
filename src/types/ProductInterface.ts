export interface Product {
  id: string;
  productName: string;
  productModel: string;
  brandName: string;
  slug: string;
  description: string;
  filters: { name: string; value: string | number }[];
  keyApplications: string[];
  keyFeatures: string[];
  images: string[];
  price: number;
  available: boolean;
  serviceId: string;
  createdAt: string;
  updatedAt: string;
  service?: {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  specs: {
    id: string;
    title: string;
    description: string;
    data: Record<string, string>[];
    productId: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface specs {
  id: string;
  title: string;
  description: string;
  data: Record<string, string>[];
  productId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsViewProps {
  products: Product[];
  view: "list" | "grid";
}

export type ProductDetailProps = {
  product: Product;
};
