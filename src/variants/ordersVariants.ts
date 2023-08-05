import { Variants } from "framer-motion";

export const ordersContainerVariants: Variants = {
	animate: {
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

export const ordersLinkVariants: Variants = {
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
