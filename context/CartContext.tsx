import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
id: string;
name: string;
price: number;
quantity: number;
};

type CartContextType = {
cart: CartItem[];
addToCart: (item: CartItem) => void;
removeFromCart: (id: string) => void;
clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
const [cart, setCart] = useState<CartItem[]>([]);

const addToCart = (item: CartItem) => {
setCart((prev) => [...prev, item]);
};

const removeFromCart = (id: string) =>
setCart((prev) => prev.filter((item) => item.id !== id));

const clearCart = () => setCart([]);

return (
<CartContext.Provider
value={{
cart,
addToCart,
removeFromCart,
clearCart,
}}
>
{children}
</CartContext.Provider>
);
};

export const useCart = () => {
const ctx = useContext(CartContext);
if (!ctx) throw new Error("useCart must be used within a CartProvider");
return ctx;
};
