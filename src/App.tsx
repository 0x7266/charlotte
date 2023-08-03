import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Local from "./pages/Local";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className="flex flex-col gap-5 md:gap-0 items-center bg-neutral-300 font-montserrat min-h-[100dvh] h-full relative overflow-x-hidden md:overflow-y-hidden">
			<Header />
			<div className="main flex flex-col justify-center grow container relative h-full">
				<AnimatePresence mode="wait">
					<Routes key={location.pathname} location={location}>
						<Route path="/" element={<Home />} />
						<Route path="/produtos" element={<Products />} />
						<Route path="/encomendas" element={<Orders />} />
						<Route path="/localizacao" element={<Local />} />
					</Routes>
				</AnimatePresence>
			</div>
			<Footer />
		</div>
	);
}

export default App;
