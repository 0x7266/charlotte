import { Variants } from "framer-motion";

export const localContainerVariants: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
	exit: {
		opacity: 0,
	},
};

export const localInfoVariants: Variants = {
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

export const localMapVariants: Variants = {
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
