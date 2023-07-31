import { Variants } from "framer-motion";

export const footerVariants: Variants = {
	initial: {
		y: 100,
	},
	animate: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0,
			duration: 0.4,
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
};

export const footerElementVariants: Variants = {
	initial: {
		y: 100,
	},
	animate: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.2,
			duration: 0.4,
		},
	},
};
