import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/images/logo.png";

export default function Header() {
	const location = useLocation();

	const pages = [
		["Produtos", "produtos"],
		["Encomendas", "encomendas"],
		["Localização", "localizacao"],
	];
	console.log(location.pathname);

	return (
		<header className="bg-chrltt flex flex-col justify-center items-center py-1 px-2 sm:px-10 pt-0 h-fit w-full">
			<div className="container flex flex-col sm:flex-row justify-around items-center">
				<Link to="/" className="focus:outline-red-400">
					<img className="w-20" src={logo} />
				</Link>
				<nav className="flex w-full justify-between items-center sm:w-fit sm:gap-10 font-bold">
					{pages.map((page) => (
						<Link
							to={page[1]}
							key={page[1]}
							className={`relative px-3 py-2 transition-all ${
								page[1] === location.pathname.slice(1)
									? "text-chrltt"
									: "text-white"
							}`}
						>
							{page[1] === location.pathname.slice(1) ? (
								<motion.div
									transition={{ duration: 0.2 }}
									layoutId="active"
									className="absolute inset-0 bg-white"
									style={{ borderRadius: 9999999 }}
								/>
							) : null}
							<span className="relative z-20 ">{page[0]}</span>
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
