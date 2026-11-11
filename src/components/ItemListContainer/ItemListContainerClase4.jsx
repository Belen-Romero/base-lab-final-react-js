import { useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ title, url }) => {
  //CLASE 4: ESTADOS Y EVENTOS
  //SOLO es para ejemplo practico porque aun nos faltan temas por ver: NO ES LA MANERA CORRECTA
  const arrayProducts = [
    {
      id: 0,
      name: "Producto 1",
      description: "Descripcion 1",
      price: 123,
      image:
        "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
    },
    {
      id: 1,
      name: "Producto 2",
      description: "Descripcion 2",
      price: 456,
      image:
        "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
    },
    {
      id: 2,
      name: "Producto 3",
      description: "Descripcion 3",
      price: 789,
      image:
        "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
    },
  ];

  const [products, setProducts] = useState([]);

  //CLASE 4: ESTADOS Y EVENTOS
  //SIMULACION PROVISORIA de traer productos
  const getProducts = () => setProducts(arrayProducts);

  const clearProducts = () => setProducts([]);

  return (
    <section>
      <h1>{title}</h1>
      {/* CLASE 4: ESTADOS Y EVENTOS */}
      <p>Este componente a futuro tendra logica y conexion a API</p>
      <h2>👉BOTONES Y FUNCIONES PROVISORIAS🛠️</h2>

      <button onClick={getProducts}>Traer productos</button>
      <button onClick={clearProducts}>Vaciar productos</button>

      <ItemList products={products} />
    </section>
  );
};
