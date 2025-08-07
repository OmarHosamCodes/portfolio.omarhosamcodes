"use client";

import { motion } from "framer-motion";
import {
	BarChart3,
	Code2,
	Database,
	ExternalLink,
	Github,
	Globe,
	Smartphone,
	Terminal,
} from "lucide-react";
import type { FC } from "react";

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	category: string;
	index?: number;
}

const categoryConfig = {
	websites: {
		icon: Globe,
		gradient: "from-blue-500 to-cyan-500",
		bgGradient: "from-blue-500/10 to-cyan-500/10",
		borderColor: "border-blue-500/30",
		tagStyle: "bg-blue-400/20 text-blue-300",
	},
	wordpress: {
		icon: Code2,
		gradient: "from-indigo-500 to-purple-500",
		bgGradient: "from-indigo-500/10 to-purple-500/10",
		borderColor: "border-indigo-500/30",
		tagStyle: "bg-indigo-400/20 text-indigo-300",
	},
	cli: {
		icon: Terminal,
		gradient: "from-green-500 to-emerald-500",
		bgGradient: "from-green-500/10 to-emerald-500/10",
		borderColor: "border-green-500/30",
		tagStyle: "bg-green-400/20 text-green-300",
	},
	databases: {
		icon: Database,
		gradient: "from-orange-500 to-red-500",
		bgGradient: "from-orange-500/10 to-red-500/10",
		borderColor: "border-orange-500/30",
		tagStyle: "bg-orange-400/20 text-orange-300",
	},
	analytics: {
		icon: BarChart3,
		gradient: "from-pink-500 to-rose-500",
		bgGradient: "from-pink-500/10 to-rose-500/10",
		borderColor: "border-pink-500/30",
		tagStyle: "bg-pink-400/20 text-pink-300",
	},
	mobile: {
		icon: Smartphone,
		gradient: "from-violet-500 to-purple-500",
		bgGradient: "from-violet-500/10 to-purple-500/10",
		borderColor: "border-violet-500/30",
		tagStyle: "bg-violet-400/20 text-violet-300",
	},
	apis: {
		icon: Code2,
		gradient: "from-teal-500 to-cyan-500",
		bgGradient: "from-teal-500/10 to-cyan-500/10",
		borderColor: "border-teal-500/30",
		tagStyle: "bg-teal-400/20 text-teal-300",
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 30, scale: 0.95 },
	visible: (index: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.5,
			delay: index * 0.1,
			ease: "easeOut",
		},
	}),
};

const ProjectCard: FC<ProjectCardProps> = ({
	title,
	description,
	tags,
	category,
	index = 0,
}) => {
	const config =
		categoryConfig[category as keyof typeof categoryConfig] ||
		categoryConfig.websites;
	const Icon = config.icon;

	return (
		<motion.div
			variants={cardVariants}
			custom={index}
			whileHover={{
				y: -8,
				scale: 1.02,
				transition: { duration: 0.2 },
			}}
			className={`group relative overflow-hidden rounded-2xl border ${config.borderColor} bg-gradient-to-br ${config.bgGradient} p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl`}
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
			</div>

			{/* Glow Effect */}
			<div
				className={`-inset-0.5 absolute bg-gradient-to-r ${config.gradient} opacity-0 blur transition-opacity duration-300 group-hover:opacity-20`}
			/>

			{/* Content */}
			<div className="relative z-10">
				{/* Header */}
				<div className="mb-4 flex items-start justify-between">
					<div
						className={`inline-flex rounded-xl bg-gradient-to-r ${config.gradient} p-3 shadow-lg`}
					>
						<Icon className="h-6 w-6 text-white" />
					</div>
					<div className="flex space-x-2">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="rounded-full bg-white/10 p-2 text-white/60 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
						>
							<Github className="h-4 w-4" />
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="rounded-full bg-white/10 p-2 text-white/60 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
						>
							<ExternalLink className="h-4 w-4" />
						</motion.button>
					</div>
				</div>

				{/* Title and Description */}
				<h3 className="mb-3 font-bold text-white text-xl transition-colors group-hover:text-white/90">
					{title}
				</h3>
				<p className="mb-6 text-gray-300 leading-relaxed transition-colors group-hover:text-gray-200">
					{description}
				</p>

				{/* Tags */}
				<div className="flex flex-wrap gap-2">
					{tags.map((tag, tagIndex) => (
						<motion.span
							key={tag}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
							whileHover={{ scale: 1.05 }}
							className={`rounded-full ${config.tagStyle} px-3 py-1 font-medium text-sm transition-transform`}
						>
							{tag}
						</motion.span>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
