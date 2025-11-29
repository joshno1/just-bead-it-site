import React, { createContext, useContext, useEffect, useState } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  add: (product: { id: string; name: string; price: number }, qty?: number) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider');
  }
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('jb_cart');
      if (raw) {
        setItems(JSON.parse(raw) as CartItem[]);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('jb_cart', JSON.stringify(items));
    } catch (e) {
      // ignore
    }
  }, [items]);

  const add = (product: { id: string; name: string; price: number }, qty = 1) => {
    setItems((cur) => {
      const f = cur.find((c) => c.id === product.id);
      if (f) {
        return cur.map((c) => (c.id === product.id ? { ...c, quantity: c.quantity + qty } : c));
      }
      return [...cur, { id: product.id, name: product.name, price: product.price, quantity: qty }];
    });
  };

  const remove = (id: string) => setItems((cur) => cur.filter((i) => i.id !== id));

  const updateQty = (id: string, qty: number) =>
    setItems((cur) => cur.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, qty) } : i)));

  const clear = () => setItems([]);

  return <CartContext.Provider value={{ items, add, remove, updateQty, clear }}>{children}</CartContext.Provider>;
}
