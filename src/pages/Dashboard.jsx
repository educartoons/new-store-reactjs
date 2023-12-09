import { useState, useEffect } from "react";
import Products from "../components/Products";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // peticion que haces a un endpoint basada en un metodo del protocolo HTTP
    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    setProducts(data.products);
  };

  useEffect(() => {
    console.log("ejecutandose app");
    fetchProducts();
  }, []);

  return (
    <div className="bg-slate-200">
      <h2>Proyecto en ReactJS</h2>
      <Products products={products} />
    </div>
  );
}
