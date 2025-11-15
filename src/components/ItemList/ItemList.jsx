import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ lista }) => {
  return (
    <>
      {lista.length ? (
        <div className="container">
          <div className="row gx-3 gy-4">
            {lista.map((prod) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={prod.id}>
                <Link to={`/detail/${prod.id}`} className="text-decoration-none text-reset">
                  <Item {...prod} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );
};