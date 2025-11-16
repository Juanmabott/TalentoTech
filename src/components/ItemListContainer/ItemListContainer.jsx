import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { getAllProducts, getProductsByCategory } from "../../services/products";

export const ItemListContainer = ({ titulo }) => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await getAllProducts();
        if (category) {
          
          setProducts(await getProductsByCategory(category));
        } else {
          setProducts(data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [category]);

  return (
    <section>
      <h1>{titulo}</h1>
      <ItemList lista={products} />
    </section>
  );
};