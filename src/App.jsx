import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Encomendas from "./pages/Encomendas";
import Localizacao from "./pages/Localizacao";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, when: "beforeChildren" }}
      viewport={{ once: true }}
      className="flex flex-col bg-neutral-300 font-montserrat min-h-screen relative"
    >
      <Header />
      <div className="main min-h-[80vh] sm:h-[82vh] flex justify-center">
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
    </motion.div>
  );
}

export default App;
