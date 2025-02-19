import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify"; // Import toast notifications

// Create a context for managing cart state globally
const CartContext = createContext();

// Provider component to wrap around the app and manage cart state
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Store cart items
  const [cartCount, setCartCount] = useState(0); // Store total count of items in cart

  // Function to add an item to the cart
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });

    setCartCount((prevCount) => prevCount + quantity);

    // ✅ Only fire toast here to prevent duplicate notifications
    toast.success(`${quantity}x ${product.title} added to cart! 🛒`, { autoClose: 2000 });
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setCartCount((prevCount) =>
      cart.find((item) => item.id === productId)
        ? prevCount - cart.find((item) => item.id === productId).quantity
        : prevCount
    );

    toast.info("Item removed from cart 🛒", { autoClose: 2000 });
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context in other components
export const useCart = () => useContext(CartContext);
