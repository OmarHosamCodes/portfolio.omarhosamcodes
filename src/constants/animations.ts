import type { Easing } from "framer-motion";

/**
 * Animation variants for framer-motion components
 */

export const sectionVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
} as const;

export const titleVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: "easeInOut" as Easing },
	},
} as const;

export const cardVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: (index: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.5,
			delay: index * 0.1,
			ease: "easeOut" as Easing,
		},
	}),
} as const;
