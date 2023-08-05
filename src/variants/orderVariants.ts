import { Variants } from "framer-motion";

export const containerVariants: Variants = {
	// hidden: {
	// 	opacity: 0,
	// },
	animate: {
		// opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.2,
			staggerDirection: -1,
		},
	},
};

export const linkVariants: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};
