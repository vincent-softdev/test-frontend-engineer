import { IProduct } from "@/types";
import Link from "next/link";

type ProductCardProps = {
    product: IProduct;
}

const ProductCard = (props: ProductCardProps) => {
    return (
        <div className="border p-4 rounded shadow-md">
            <img src={props.product.image} alt={props.product.title} className="max-h-[320px] w-auto max-w-[80%] object-cover mx-auto"/>
            <h2 className="font-bold text-lg">{props.product.title}</h2>
            <p className="text-gray-600">{props.product.price}</p>
            {/* Assume we already have this product page with id is a parameter */}
            <Link href={`/products/${props.product.id}`}>
                <button className="mt-2 p-2 bg-green-500 text-white cursor-pointer">View Details</button>
            </Link>
        </div>
    )
}

export default ProductCard