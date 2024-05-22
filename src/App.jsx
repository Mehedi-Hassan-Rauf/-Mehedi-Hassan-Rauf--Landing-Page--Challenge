import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="max-w-screen overflow-hidden flex flex-col items-center">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route
          path="*"
          element={
            <div className="my-[16%]">
              <h1 className="text-4xl text-red-500">404</h1>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
