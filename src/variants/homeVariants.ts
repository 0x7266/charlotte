export const homeVariants = {
	hidden: {
		y: 80,
		opacity: 0,
	},
	visible_title: {
		y: 0,
		opacity: 1,
	},
	visible_subtitle: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.3,
		},
	},
	exit: {
		y: 80,
		opacity: 0,
		transition: {
			y: { duration: 0.2 },
			opacity: { duration: 0.1 },
		},
	},
};
