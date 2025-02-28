"use client";
import * as React from "react";
import { useCartStore } from "@/store/useCartStore"; // ✅ Import cart store
import { IProduct } from "@/types";

const ProductCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`rounded-lg border bg-white shadow-sm p-4 ${className}`}>{children}</div>
);

const ProductCardImage = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
    <img src={src} alt={alt} className={`w-auto h-48 object-fill rounded-lg ${className}`} />
);

const ProductCardBody = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`p-4 ${className}`}>{children}</div>
);

const ProductCardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const ProductCardPrice = ({ price, className = "" }: { price: string; className?: string }) => (
    <p className={`text-green-600 font-medium ${className}`}>${price}</p>
);

const ProductCardDescription = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <p className={`text-sm text-gray-600 ${className}`}>{children}</p>
);

const ProductCardFooter = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`flex justify-between items-center p-4 border-t ${className}`}>{children}</div>
);

const ProductCardButton = ({ onClick, children, className = "" }: { onClick: () => void; children: React.ReactNode; className?: string }) => (
    <button onClick={onClick} className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ${className}`}>
        {children}
    </button>
);

const ProductCardFavoriteButton = ({ onClick, className = "" }: { onClick?: () => void; className?: string }) => (
    <button onClick={onClick} className={`absolute top-3 right-3 text-red-500 hover:text-red-700 ${className}`}>
        ❤️
    </button>
);

const ProductCardInfo = ({ title, category, className = "" }: { title: string; category: string; className?: string }) => (
    <div className={`text-center ${className}`}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
    </div>
);

// ✅ Updated: ProductCardActions now adds item to cart
const ProductCardActions = ({
    product,
    className = "",
}: {
    product: IProduct;
    className?: string;
}) => {
    const addToCart = useCartStore((state) => state.addToCart); // ✅ Get function from store

    return (
        <div className={`flex justify-between items-center gap-2 mt-3 ${className}`}>
            <ProductCardButton onClick={() => addToCart(product, 1)}>Add to Cart</ProductCardButton>
        </div>
    );
};

// ✅ Extend ProductCard with subcomponents correctly
const ProductCardExtended = Object.assign(ProductCard, {
    Image: ProductCardImage,
    Body: ProductCardBody,
    Title: ProductCardTitle,
    Price: ProductCardPrice,
    Description: ProductCardDescription,
    Footer: ProductCardFooter,
    Button: ProductCardButton,
    FavoriteButton: ProductCardFavoriteButton,
    Info: ProductCardInfo,
    Actions: ProductCardActions,
});

export { ProductCardExtended as ProductCard };
