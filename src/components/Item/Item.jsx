// import { Count } from "../Count/Count";
import { Link } from "react-router-dom";
import "./Item.css";

//Si se utiliza dummyjson, las imagenes vienen un un array⚠️

//👉Agregamos children para pasar el boton en ItemDetail para agregar al carrito👈

export const Item = ({ name, price, description, image, children }) => {
  return (
    <article className="card">
      {/* <img src={images[0]} /> */}
      <img src={image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>

      {/* Podemos usar children y reutilizar este componente */}
      {children}
    </article>
  );
};
