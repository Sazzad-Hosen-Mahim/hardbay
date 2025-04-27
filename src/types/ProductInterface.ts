export interface Product {
	id: string;
	title: string;
	description: string;
	createdAt: string;
	// add other fields as needed
}

export interface ProductsViewProps {
	products: Product[];
	view: 'list' | 'grid';
}
