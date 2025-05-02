export interface Product {
	id: string;
	description: string;
	createdAt: string;
	productName: string;
	keyApplications: string[];
	keyFeatures: string[];
	specs: specs[];
	available: boolean;

	// add other fields as needed
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
	view: 'list' | 'grid';
}

export type ProductDetailProps = {
	product: Product;
};
