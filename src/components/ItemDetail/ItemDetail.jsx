import { Item } from "../Item/Item";
import { useCartContext } from "../context/useCartContext";
import { Count } from "../count/Count";
export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();


  const handleAdd = (quantity) => {
    addItem({...detail}, quantity);
  };

  return (
    <Item {...detail}>
      <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />


      {/* <button onClick={handleAdd}>Enviar al carrito</button> */}
    </Item>
  );
};