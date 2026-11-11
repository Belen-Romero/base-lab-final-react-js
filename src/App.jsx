import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path="/cart" element={<h2>Carrito</h2>} />
          <Route path={"/category/:category"} element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
