import { motion } from "framer-motion";
import home from "../variants/home.js";
import charlotte from "../variants/charlotte";

export default function Home() {
	return (
		<div className="flex justify-center items-center relative">
			<div className="flex flex-col justify-center items-center">
				<motion.div
					variants={home}
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
						variants={charlotte}
						className="text-6xl sm:text-8xl font-semibold"
					>
						Charlotte
					</motion.div>
					<motion.div
						variants={charlotte}
						className="flex justify-center gap-5"
					>
						<div>c a k e </div> <div> s h o p</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
