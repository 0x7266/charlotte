import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/images/logo.png";
import { useState } from "react";
import { containerVariants, elementVariants, linkVariants } from "../variants";

export default function Header() {
	const location = useLocation();
	const [active, setActive] = useState(location.pathname.slice(1));

	const pages = [
		["Produtos", "produtos"],
		["Encomendas", "encomendas"],
		["Localização", "localizacao"],
	];

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", bounce: 0 }}
			className="bg-chrltt flex flex-col justify-center items-center py-3 sm:py-1 px-2 sm:px-10 pt-0 h-fit w-full overflow-hidden"
		>
			<motion.div
				variants={containerVariants}
				initial="initial"
				animate="animate"
				className="container flex flex-col sm:flex-row justify-around items-center"
			>
				<motion.div variants={elementVariants} onClick={() => setActive("/")}>
					<Link to="/" className="focus:outline-red-400">
						<img className="w-20" src={logo} />
					</Link>
				</motion.div>
				<motion.nav
					variants={elementVariants}
					className="flex w-full justify-between items-center sm:w-fit sm:gap-10 font-bold text-[#2ACFC8]"
				>
					{pages.map((page) => (
						<motion.div variants={linkVariants}>
							<Link
								to={page[1]}
								key={page[1]}
								onClick={() => setActive(page[1])}
								className={`relative px-3 py-2 transition-all `}
							>
								{page[1] === active && (
									<motion.div
										layoutId="active"
										transition={{ type: "spring", duration: 1 }}
										className="absolute inset-0 bg-white"
										style={{ borderRadius: 6 }}
									/>
								)}
								<span className="relative z-20 mix-blend-exclusion bg-blend-exclusion">
									{page[0]}
								</span>
							</Link>
						</motion.div>
					))}
				</motion.nav>
			</motion.div>
		</motion.header>
	);
}
