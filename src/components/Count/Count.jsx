import { useEffect, useState } from "react";
import "./Count.css";

export const Count = ({ btnAction, onAdd }) => {
  const [count, setCount] = useState(0);
  const [mostrar, setMostrar] = useState(true);

  // Funciones para incrementar y decrementar
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count-container">
      <div className="count-row">
        <button
          className="btn primary bg-primary"
          onClick={decrement}
          disabled={count === 0}
        >
          -
        </button>

        <p>Seleccion: {count}</p>

        <button className="btn primary bg-primary" onClick={increment}>
          +
        </button>
      </div>
      <button
        className="btn bg-primary primary"
        onClick={() => onAdd(count)}
        disabled={count === 0}
      >
        {btnAction}
      </button>
    </div>
  );
};
