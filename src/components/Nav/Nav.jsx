import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext/useCartContext";
import { useAuthContext } from "../context/AuthContext/useAuthContext";
import logo from "/logo.png";
import "./Nav.css";
export const Nav = () => {

  const {getTotalItems} = useCartContext();
  const { user, logout } = useAuthContext();
  //Dejamos los Link preparados para cuando hagamos filtrado por categoria
  //Por ahora, quedan de vista, pero sirven al tocar para escribir la ruta
  //en la barra de busqueda
  return (
    <nav>
      <ul>
        <li className="nav-brand">
          <Link to={"/"}>
            <img className="nav-logo" src={logo} alt="Logo de la tienda" />
          </Link>
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
        <li>
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};