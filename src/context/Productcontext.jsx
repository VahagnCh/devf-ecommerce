import {React, createContext, useState, useEffect} from "react";
import axios from "axios";

export const Productcontext = createContext()

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
      
        useEffect(() => {
          axios.get("https://ecommerce-json-jwt.onrender.com/items") // Replace with your API endpoint
            .then(response => {
              setProducts(response.data);
            })
            .catch(error => {
              console.error("There was an error fetching the products!", error);
            });
        }, []);
        return (
            <Productcontext.Provider value = {{products}}>
                {children}
                </Productcontext.Provider>
        )
}