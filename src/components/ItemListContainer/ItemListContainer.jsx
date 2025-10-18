import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        // Si hay una categoría en la ruta, filtrar los productos por esa categoría
        if (category) {
          const filtered = data.filter((p) => p.category === category);
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <section>
      <h1>{titulo}</h1>
      <ItemList lista={products} />
    </section>
  );
};