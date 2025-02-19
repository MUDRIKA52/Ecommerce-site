import React from "react";
import ReactDOM from "react-dom/client"; // Import 'createRoot' from React 18
import { Provider } from "react-redux"; // Import Redux Provider
import store from "./redux/store"; // Import Redux Store
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import App from "./App";

// Create Root Element 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //  Provide Redux Store to the entire application
  <Provider store={store}> 
    {/*  Provide Cart Context for Shopping Functionality */}
    <CartProvider> 
      <App />
    </CartProvider>
  </Provider>
);
