import { motion } from "framer-motion";
import Map from "../components/Map";

export default function Local() {
	return (
		<div className="container flex flex-col items-center">
			<div className="flex flex-col sm:items-start gap-10 py-2 px-5 sm:overflow-hidden md:w-11/12 ">
				<div className="flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between w-full">
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
						className="text-5xl sm:text-6xl font-bold"
					>
						Como chegar
					</motion.h2>
					<p className="text-lg sm:text-end font-semibold">
						Av. Dr. Nilo Peçanha, 67
						<br />
						Parque Santo Amaro, Campos dos Goytacazes RJ
						<br />
						28030-035
					</p>
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
