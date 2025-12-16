import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [Cart, setCart] = useState([]);

    const exists = (id) => {
        const exist = Cart.some((p) => p.id === id);
        return exist;
    };

     const addItem = (item) => {
        if (exists(item.id)) {
            alert("El producto ya existe en el carrito");
            return;
        };

        setCart([...Cart, item]);
        alert('${item.name} agregado')
    };

    const clearCart = () => {
        setCart([])
    }

    const getTotalItems = () => {
       if (Cart.length) {
        return Cart.length;
       }
    };

    const values = {
        Cart, 
        addItem, 
        clearCart, 
        getTotalItems,
    };

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};