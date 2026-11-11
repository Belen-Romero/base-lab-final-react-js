import { Item } from "../Item/Item";
// import "../Count/Count";
import { useCart } from "../../context/CartContext";
// import { Count } from "../Count/Count";

import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  const { addItem } = useCart();

  // const handleAdd2 = (quantity) => {
  //   addItem2(item, quantity);
  // };

  return (
    <div className="detail-wrapper">
      <Item {...item}>
        {/* <Count onAdd={handleAdd2} btnAction={"Agregar al carrito"} /> */}
        <button
          className="btn bg-primary primary"
          onClick={() => addItem(item)}
        >
          Agregar al carrito
        </button>
      </Item>
    </div>
  );
};
