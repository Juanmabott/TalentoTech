import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./itemList.css";

export const ItemList = ({ lista }) => {
  return (
    <>
      {lista.length ? (
        // envolver el mapeo en el contenedor grid (clase en CSS)
        <div className="item-list-grid">
          {lista.map((prod) => (
            <Link to={`/detail/${prod.id}`} key={prod.id}>
              <Item {...prod} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );
};