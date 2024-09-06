import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./components/layout/MainLayout";
import ProductDetailsPage from "./Pages/ProductDetailPage";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/RegisterPage";
import { ROUTES } from "./constants/router";
import { GlobalHistory } from "./redux/utils/globalHistory";
import WarrantyPage from "./Pages/WarrantyPage";
import FreeShipPage from "./Pages/FreeShipPage";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalHistory />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={"home"} element={<HomePage />} />
            <Route path={"login"} element={<LoginPage />} />
            <Route path={"register"} element={<RegisterPage />} />
            <Route path={"warranty"} element={<WarrantyPage />} />
            <Route path={"free-ship"} element={<FreeShipPage />} />
            <Route
              path="/products/:idProduct"
              element={<ProductDetailsPage />}
            />
          </Route>
          <Route path={"cart-page"} element={<CartPage />} />
          {/* <Route path="/" element={<Navigate to={ROUTES.HOME_PAGE} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
