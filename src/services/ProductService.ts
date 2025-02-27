import { IProduct } from "@/types";

export class ProductService {
    // Setup the API URL
    private static API_URL = "https://fakestoreapi.com/products";

    // Get all products
    public static async getProducts(): Promise<IProduct[]> {
        const response = await fetch(this.API_URL);
        return await response.json();
    }

    // Get a single product
    public static async getProduct(id: number): Promise<IProduct> {
        const response = await fetch(`${this.API_URL}/${id}`);
        return await response.json();
    }
}
