// src/redux/actions/productActions.js
import axios from "axios";

// Action Types
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

/**
 * Fetch products from FakeStore API and dispatch to Redux store.
 * Uses async/await for handling API requests and error handling.
 */
export const fetchProducts = () => async (dispatch) => {
  try {
    // Send GET request to fetch all products
    const response = await axios.get("https://fakestoreapi.com/products");

    // Dispatch action with fetched products on success
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    // Handle API errors and dispatch failure action with error message
    console.error("Error fetching products:", error);
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};

