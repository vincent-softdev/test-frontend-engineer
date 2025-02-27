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

    public static async searchProducts(query: string): Promise<IProduct[]> {
        if (!query) return [];
    
        try {
          const allProducts = await this.getProducts(); // Reuse existing API call
          return allProducts.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          );
        } catch (error) {
          console.error("Error fetching search results:", error);
          return [];
        }
    }
}
