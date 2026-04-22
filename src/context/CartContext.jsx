import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // AGREGAR O SUMAR ITEM
  const addToCart = (item, quantity) => {
    // Blindaje: Forzamos que precio y cantidad sean números
    const cleanPrice = Number(item.price) || 0;
    const cleanQty = Number(quantity) || 0;

    if (isInCart(item.id)) {
      setCart(cart.map((prod) => 
        prod.id === item.id 
        ? { ...prod, quantity: prod.quantity + cleanQty } 
        : prod
      ));
    } else {
      setCart([...cart, { ...item, price: cleanPrice, quantity: cleanQty }]);
    }
  };

  // RESTAR O ELIMINAR ITEM
  const removeItem = (id) => {
    const product = cart.find(p => p.id === id);
    if (!product) return;

    if (product.quantity > 1) {
      setCart(cart.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p));
    } else {
      setCart(cart.filter(p => p.id !== id));
    }
  };

  const isInCart = (id) => cart.some((prod) => prod.id === id);
  const clearCart = () => setCart([]);

  // CÁLCULO DE TOTALES 
  const totalItems = cart.reduce((acc, item) => acc + (Number(item.quantity) || 0), 0);

  const totalPrice = cart.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 0;
    return acc + (price * qty);
  }, 0);

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, removeItem, clearCart, totalItems, totalPrice 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);