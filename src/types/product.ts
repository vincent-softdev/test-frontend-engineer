export interface Category {
    name: string;
    image: string;
}

export interface Product {
    id: string;
    title: string;
    images: string[];
    category: Category;
}

export interface ProductsResponse {
    data: {
        products: Product[];
    };
}