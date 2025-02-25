'use client'

import { Product } from "@/types"
import React from "react"

type CartContextType = {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (product: Product) => void
    clearCart: () => void
}

export const CartContext = React.createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
})

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [cart, setCart] = React.useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (product: Product) => {
        setCart(cart.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart: [], addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => React.useContext(CartContext)