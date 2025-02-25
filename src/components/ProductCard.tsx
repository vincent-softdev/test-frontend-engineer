import { Product } from "@/types";
import Link from "next/link";

type ProductCardProps = {
    product: Product;
}

const ProductCard = (props: ProductCardProps) => {
    return (
        <div>
            <img src={props.product.image} alt={props.product.title} />
            <h2>{props.product.title}</h2>
            <p>{props.product.price}</p>
            {/* Assume we already have this product page with id is a parameter */}
            <Link href={`/products/${props.product.id}`}>
                <button>View Details</button>
            </Link>
        </div>
    )
}

export default ProductCard