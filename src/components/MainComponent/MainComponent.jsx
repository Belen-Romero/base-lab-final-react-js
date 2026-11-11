// import { Count } from "../../Count/Count";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import styles from "./MainComponent.module.css";

export const MainComponent = () => {
  return (
    <main className={styles.container}>
      <h2>Este es el main de la pagina</h2>
      <ItemListContainer titulo={"Titulo del Container pasado por props"} />
    </main>
  );
};
