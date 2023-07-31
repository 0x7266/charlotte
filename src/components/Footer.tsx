import { motion } from "framer-motion";
import { footerElementVariants, footerVariants } from "../variants";

export default function Footer() {
	return (
		<motion.footer
			initial={{ y: 100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", bounce: 0 }}
			className="bg-chrltt flex flex-col justify-center items-center sm:px-10 w-full"
		>
			<motion.div
				variants={footerVariants}
				initial="initial"
				animate="animate"
				className="container flex flex-col gap-1 justify-center items-center text-neutral-200 sm:flex-row sm:gap-20 py-6"
			>
				<motion.div variants={footerElementVariants} className="endereco">
					Av. Dr. Nilo Peçanha, 67
				</motion.div>
				<motion.div variants={footerElementVariants}>
					55 (22) 99748-4545
				</motion.div>
			</motion.div>
		</motion.footer>
	);
}
