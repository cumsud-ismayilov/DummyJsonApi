import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

function Product({ selected ,searchItem}) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url =
      selected === "all"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${selected}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, [selected]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8">
      {products.filter(item => item.title.toLowerCase().includes(searchItem.toLowerCase())).map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Product;
