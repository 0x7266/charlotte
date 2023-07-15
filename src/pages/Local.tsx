import { motion } from "framer-motion";
import Map from "../components/Map";

export default function Local() {
	return (
		<div className="container flex flex-col items-center">
			<div className="flex flex-col justify-center h-full sm:items-start gap-2 py-2 px-5 sm:overflow-hidden md:w-11/12 ">
				<div className="md:hidden flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between w-full">
					{/* <motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="text-5xl sm:text-6xl font-bold"
					>
						Como chegar
					</motion.h2> */}
					<p className="text-lg text-end font-semibold">
						Av. Dr. Nilo Peçanha, 67
						<br />
						Parque Santo Amaro
						<br />
						Campos dos Goytacazes, RJ
						<br />
						28030-035
					</p>
				</div>
				<div className="hidden md:block text-center w-full text-black font-bold">
					Av. Dr. Nilo Peçanha, 67 <span className="text-xl"> | </span> Parque
					Santo Amaro, Campos dos Goytacazes, RJ{" "}
					<span className="text-xl"> | </span> 28030-035
				</div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="w-full"
				>
					<Map />
				</motion.div>
			</div>
		</div>
	);
}
