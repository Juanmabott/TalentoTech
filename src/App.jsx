import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./components/context/CartContext/CartProvider";
import AuthProvider from "./components/context/AuthContext/AuthProvider";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import Login from "./components/Login";
import { MainLayout } from "./components/AdminLayout/MainLayout";
import { AdminLayout } from "./components/AdminLayout/AdminLayout";
import { RutaProtegida } from "./components/RutaProtegida";
function CategoryItemList() {
  const { category } = useParams();
  return <ItemListContainer titulo={category ? category : "Bienvenidos"} />;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<ItemListContainer titulo={"Soft"} />} />
                <Route path="/category/:category" element={<CategoryItemList />} />
                <Route path="/detail/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />

                <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={
                    <RutaProtegida>
                      <ProductFormContainer />
                    </RutaProtegida>
                  } />
                  <Route
                    path="altaproductos"
                    element={
                      <RutaProtegida>
                        <ProductFormContainer />
                      </RutaProtegida>
                    }
                  />
                </Route>
              </Route>
            </Routes>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;