import { motion } from "framer-motion";
import Map from "../components/Map";

export default function Local() {
	return (
		<div className="container flex flex-col items-center">
			<div className="flex flex-col sm:items-start gap-10 py-2 px-5 sm:overflow-hidden md:w-11/12 ">
				<motion.h2
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="text-5xl sm:text-6xl font-bold"
				>
					Como chegar
				</motion.h2>
				<div className="flex flex-col gap-10 justify-center w-full">
					<p className="text-xl font-semibold w-60">
						Av. Dr. Nilo Peçanha, 67 Parque Santo Amaro, Campos dos Goytacazes
						RJ, 28030-035
					</p>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className=""
					>
						<Map />
					</motion.div>
				</div>
			</div>
		</div>
	);
}
