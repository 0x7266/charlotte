import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Produtos from "./pages/Produtos";
import Localizacao from "./pages/Localização";
import Encomendas from "./pages/Encomendas";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-neutral-300 font-montserrat">
      <Header />
      <div className="px-2">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/encomendas" exact element={<Encomendas />} />
          <Route path="/produtos" exact element={<Produtos />} />
          <Route path="/localizacao" exact element={<Localizacao />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
