import { Link } from "react-router-dom";
import { useCartContext } from "../context/useCartContext";
import "./Nav.css";

export const Nav = () => {

    const {getTotalItems} = useCartContext();
  //Dejamos los Link preparados para cuando hagamos filtrado por categoria
  //Por ahora, quedan de vista, pero sirven al tocar para escribir la ruta
  //en la barra de busqueda
  return (
    <nav>
      <ul>
        <li className="nav-brand">
          <Link to={"/"}><img className="nav-logo" src="/logo.png" alt="Logo de la tienda" /></Link>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/Superior"}>Superior</Link>
        </li>
        <li>
          <Link to={"/category/Inferior"}>Inferior</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            Carrito
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};