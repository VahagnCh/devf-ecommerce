import Singlecard from "../atoms/Singlecard"
import { ProductContext } from "../../context/Productcontext";
import { useContext } from "react";

// "id", "product_name" "description" "price" "category" "brand" "image"
function Cardlayout() { 
    const {products} = useContext(ProductContext)
        return (
          <div>
             <Singlecard products={products} />
          </div>
        );
}

export default Cardlayout;
