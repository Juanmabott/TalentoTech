import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./components/context/CartProvider";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <Header />
        <div className="app-wrapper">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer titulo={"Bienvenidos"} />}
            />
            <Route
              path="/category/:category"
              element={<ItemListContainer titulo={"Categoría"} />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;