import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ name, title, price, description, imageUrl, image, children }) => {
  //recordamos el uso del children, no es obligatorio que este

  //Si este componente usara children ni botones que generen conflictos,
  // podrian envolver aca con Link (agregando el uso de props "id")
  return (
    <article className="product-item">
      <img src={imageUrl || image} alt={description || title || name} />
      <h2 className="product-title">{name || title}</h2>
      <p>Precio: ${price}</p>
      <p>{description}</p>
      {children}
    </article>
  );
};