export const productVariants = {
	initial: {
		opacity: 0,
	},
	animate: (index: number) => ({
		opacity: 1,
		transition: {
			delay: index * 0.1,
			when: "beforeChildren",
			delayChildren: 0.2,
			staggerChildren: 0.2,
		},
	}),
	exit: (index: number) => ({
		opacity: 0,
		transition: {
			delay: index * 0.1,
			staggerDirection: -1,
		},
	}),
};

export const productImageVariants = {
	initial: { y: -300 },
	animate: { y: 0 },
};

export const productNameVariants = {
	initial: { y: 100 },
	animate: { y: 0 },
};
