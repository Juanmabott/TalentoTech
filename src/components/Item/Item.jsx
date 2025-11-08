import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ name, title, price, description, imageUrl, image, children, category }) => {
  //recordamos el uso del children, no es obligatorio que este

  //Si este componente usara children ni botones que generen conflictos,
  // podrian envolver aca con Link (agregando el uso de props "id")
  return (
    <article className="product-item">
      <img src={imageUrl || image} alt={description || title || name} />
      <h2 className="product-title">{name || title}</h2>
      <p style={{color: "gold"}}>${price}</p>
      <p >{description}</p>
      <h6 style={{ color: "gray", fontStyle: "italic" }}>{category}</h6>
      {children}
    </article>
  );
};