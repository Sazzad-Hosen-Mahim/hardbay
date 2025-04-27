// export interface Product {
// 	id: string;
// 	title: string;
// 	description: string;
// 	createdAt: string;
// 	// add other fields as needed
// }


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
  

export interface ProductsViewProps {
	products: Product[];
	view: 'list' | 'grid';
}
