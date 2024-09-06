import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Header/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Support from "./pages/Support";
import PageNotFound from "./pages/PageNotFound";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Cart from "./pages/Cart";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div
        className={
          (!darkMode ? "dark" : "light") +
          " h-fit md:h-full font-customFont text-primary bg-background"
        }
      >
        <Routes>
          <Route path="/" exact element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/support" element={<Support />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
