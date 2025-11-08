import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProduct } from "../../services/products";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  //Desestructuramos el objeto del useParams
  //la clave coincide con el nombre que definimos en Route-> :id
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const product = await getProduct(id);
        setDetail(product);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};