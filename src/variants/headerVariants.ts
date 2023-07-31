import { Variants } from "framer-motion";

export const containerVariants: Variants = {
	initial: {
		y: -100,
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

export const elementVariants: Variants = {
	initial: {
		y: -100,
	},
	animate: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.2,
			duration: 0.4,
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
};

export const linkVariants: Variants = {
	initial: {
		y: -150,
	},
	animate: {
		y: 0,
		transition: {
			type: "spring",
			bounce: 0.2,
			duration: 0.2,
		},
	},
};
