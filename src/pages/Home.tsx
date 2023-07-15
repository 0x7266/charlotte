import { motion } from "framer-motion";
import { charlotteVariant, homeVariant } from "../variants";

export default function Home() {
	return (
		<div className="flex justify-center items-center relative">
			<div className="flex flex-col justify-center items-center">
				<motion.div
					variants={homeVariant}
					initial="hidden"
					animate="visible"
					drag={true}
					dragConstraints={{
						top: 20,
						right: 10,
						left: -10,
						bottom: -20,
					}}
					dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
				>
					<motion.div
						variants={charlotteVariant}
						className="text-6xl sm:text-9xl font-semibold"
					>
						Charlotte
					</motion.div>
					<motion.div
						variants={charlotteVariant}
						className="flex justify-center gap-5 sm:text-2xl"
					>
						<div>c a k e </div> <div> s h o p</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
