import { Item } from "../Item/Item";
import { useCartContext } from "../context/useCartContext";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  const handleAdd = () => {
    // añade 1 unidad del producto al carrito
    addItem(detail, 1);
    alert("Producto agregado al carrito");
  };

  return (
    //Si ustedes deciden NO reutilizar el componente Item y aca hacer
    //una seccion totalmente nueva, pueden despreocuparse del Link en ItemList.

    //En el caso de optar por la NO reutilizacion, pueden colocar el Link envolviendo el <article>
    //en Item y dejar como estaba el ItemList, sin modificaciones

    <Item {...detail}>
      <button onClick={handleAdd}>Enviar al carrito</button>
    </Item>
  );
};