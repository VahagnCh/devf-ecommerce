import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommerce-json-jwt.onrender.com/items") 
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); //filter productos
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const filterProducts = (searchTerm, category) => {
    let filtered = products;
    if (searchTerm) {
      filtered = filtered.filter ((products) => products.product_name.toLowerCase().includes(searchTerm.toLowerCase()))
    } 
    if (category) {
      filtered = filtered.filter ((products) => products.category === category) 
    }
    setFilteredProducts(filtered);
  };

  return (
    <ProductContext.Provider value={{ products, filteredProducts, filterProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
