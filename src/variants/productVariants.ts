import { Variants } from "framer-motion";

export const productsContainerVariants: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.3,
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
			staggerChildren: 0.1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			staggerChildren: 0.1,
			staggerDirection: -1,
			// when: "afterChildren",
		},
	},
};

export const productImageVariants: Variants = {
	initial: { y: -300 },
	animate: { y: 0, transition: { type: "spring", bounce: 0.2 } },
	exit: {
		y: -300,
	},
};

export const productNameVariants: Variants = {
	initial: { y: 100 },
	animate: { y: 0, transition: { type: "spring", bounce: 0.2 } },
	exit: {
		y: 100,
	},
};
