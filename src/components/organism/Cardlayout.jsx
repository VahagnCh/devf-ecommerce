import Singlecard from "../atoms/Singlecard"
import { Productcontext } from "../../context/Productcontext";
import { useContext } from "react";

// "id", "product_name" "description" "price" "category" "brand" "image"
function Cardlayout() { 
    const {products} = useContext(Productcontext)
        return (
          <div>
             <Singlecard products={products} />
          </div>
        );
}

export default Cardlayout;
