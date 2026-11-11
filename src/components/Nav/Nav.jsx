import { Link } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getTotalItems } = useCart();

  const totalItems = getTotalItems();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/category/infantil"}>Infantil</Link>
        </li>
        <li>
          <Link href={"/category/dama"}>Dama</Link>
        </li>
        <li>
          <Link href={"/category/hombre"}>Hombre</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            Carrito
            {totalItems > 0 && <span className="incart">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
