import { motion } from "framer-motion";
import Map from "../components/Map";
import {
	localContainerVariants,
	localInfoVariants,
	localMapVariants,
} from "../variants";

export default function Local() {
	return (
		<div className="container flex flex-col items-center">
			<motion.div
				variants={localContainerVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="flex flex-col justify-center h-full sm:items-start gap-2 py-2 px-5 sm:overflow-hidden md:w-11/12 "
			>
				<motion.div
					variants={localInfoVariants}
					className="md:hidden flex flex-col sm:flex-row gap-10 sm:gap-0 justify-between w-full"
				>
					<p className="text-lg text-end font-semibold">
						Av. Dr. Nilo Peçanha, 67
						<br />
						Parque Santo Amaro
						<br />
						Campos dos Goytacazes, RJ
						<br />
						28030-035
					</p>
				</motion.div>
				<motion.div
					variants={localInfoVariants}
					className="hidden md:block text-center w-full text-black font-bold"
				>
					Av. Dr. Nilo Peçanha, 67 <span className="text-xl"> | </span> Parque
					Santo Amaro, Campos dos Goytacazes, RJ{" "}
					<span className="text-xl"> | </span> 28030-035
				</motion.div>
				<motion.div variants={localMapVariants} className="w-full">
					<Map />
				</motion.div>
			</motion.div>
		</div>
	);
}
