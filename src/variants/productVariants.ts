import { Variants } from "framer-motion";

export const productsContainerVariants: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.04,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.03,
			staggerDirection: -1,
			when: "afterChildren",
		},
	},
};

export const productVariants: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.2,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.1,
			staggerDirection: -1,
		},
	},
};

export const productImageVariants: Variants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: {
		opacity: 0,
	},
};

export const productNameVariants: Variants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: {
		opacity: 0,
	},
};
