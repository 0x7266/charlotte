import { motion } from "framer-motion";
import { homeVariant } from "../variants";

export default function Home() {
	return (
		<div className="flex justify-center items-center relative">
			<motion.div
				// exit="exit"
				transition={{ staggerChildren: 1 }}
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
					// variants={charlotteVariant}
					initial="hidden"
					animate="visible_title"
					variants={homeVariant}
					exit="exit_title"
					className="text-6xl sm:text-9xl font-semibold"
				>
					Charlotte
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible_subtitle"
					// variants={charlotteVariant}
					exit="exit_subtitle"
					variants={homeVariant}
					className="flex justify-center gap-5 sm:text-2xl"
				>
					<div>c a k e </div> <div> s h o p</div>
				</motion.div>
			</motion.div>
		</div>
	);
}
