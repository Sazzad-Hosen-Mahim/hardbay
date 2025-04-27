import axios from 'axios';

const BASE_URL = 'https://tortuga7-backend.onrender.com/custom-server-build'; 

export interface Product {
  id: string;
  productName: string;
  productModel: string;
  brandName: string;
  slug: string;
  description: string;
  keyApplications: string[];
  keyFeatures: string[];
  specifications: { key: string; value: string }[];
  images: string[];
  price: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductResponse {
  success: boolean;
  serviceName: string;
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  data: Product[];
}

export const customServerBuildApi = {
  getAllProducts: (params?: { page?: number; limit?: number; productModel?: string }) =>
    axios.get<ProductResponse>(BASE_URL, { params }),

  createProduct: (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) =>
    axios.post<Product>(BASE_URL, productData),

  updateProduct: (id: string, productData: Partial<Omit<Product, 'id'>>) =>
    axios.patch<Product>(`${BASE_URL}/${id}`, productData),

  deleteProduct: (id: string) =>
    axios.delete<{ success: boolean }>(`${BASE_URL}/${id}`),
};
