import { IProduct } from "@/types";

export class ProductService {
    // Setup the API URL
    private static API_URL = "https://fakestoreapi.com/products";

    // ✅ Ensure getProduct returns a single product
    public static getProduct = async (id: number): Promise<IProduct | null> => {

      try {
        const res = await fetch(`${this.API_URL}/${id}`);

        if (!res.ok) return null;

        const data = await res.json();

        // ✅ Ensure `data` is a single object, not an array
        if (Array.isArray(data)) {
          return data.length > 0 ? data[0] : null;
        }

        return data;
      } catch (error) {
        console.error("Error fetching product:", error);
        return null;
      }
    };

    // Get all products
    public static async getProducts(): Promise<IProduct[]> {
        const response = await fetch(this.API_URL);
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
