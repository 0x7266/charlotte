import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Local from "./pages/Local";

function App() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, when: "beforeChildren" }}
			viewport={{ once: true }}
			className="flex flex-col bg-neutral-300 font-montserrat min-h-[100dvh] relative"
		>
			<Header />
			<div className="main flex justify-center flex-grow">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/produtos" element={<Products />} />
					<Route path="/encomendas" element={<Orders />} />
					<Route path="/localizacao" element={<Local />} />
				</Routes>
			</div>
			<Footer />
		</motion.div>
	);
}

export default App;
