import Cardlayout from "./components/organism/Cardlayout"
import Navbar from "./components/organism/Navbar"
import { ProductProvider } from "./context/Productcontext"

function App() {
  return (
    <ProductProvider>
    <Navbar />
    <Cardlayout />
    </ProductProvider>
    
  )
}

export default App