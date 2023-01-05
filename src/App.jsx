import { useState } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Encomendas from "./components/Encomendas";
import Localizacao from "./components/Localizacao";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col bg-neutral-300 font-montserrat min-h-screen relative">
      <Header />
      <div className="main h-[80vh] sm:h-[82vh] flex justify-center sm:px-10">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/produtos" exact element={<Products />} />
          <Route path="/encomendas" exact element={<Encomendas />} />
          <Route path="/localizacao" exact element={<Localizacao />} />
        </Routes>
      </div>
      <div className="h-[8vh]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
