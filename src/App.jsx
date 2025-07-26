import CategoryFilter from "./components/CategoryFilter/CategoryFilter"
import Navbar from "./Layout/Navbar/Navbar"
import ProductList from "./components/ProductList/Product"
import { useState } from "react";
function App() {
  const [selected, setSelected] = useState("all");
  const [searchItem, setSearchItem] = useState("")

  return (
    <>
      <Navbar setSearchItem={setSearchItem}/>
      <CategoryFilter selected = {selected} setSelected={setSelected}/>
      <ProductList selected = {selected} setSelected={setSelected} searchItem={searchItem}/>
    </>
  )
}

export default App
