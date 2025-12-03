"use client";

import { cardVariants } from "@/constants";
import { getCategoryConfig } from "@/lib/project-utils";
import type { Project, ProjectCategoryKey } from "@/types";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { FC } from "react";

interface ProjectCardProps extends Project {
	category: ProjectCategoryKey;
	index?: number;
}

const ProjectCard: FC<ProjectCardProps> = ({
	title,
	description,
	tags,
	category,
	index = 0,
	githubUrl,
	liveUrl,
}) => {
	const config = getCategoryConfig(category);
	const Icon = config.icon;

	return (
		<motion.article
			variants={cardVariants}
			custom={index}
			whileHover={{
				y: -8,
				scale: 1.02,
				transition: { duration: 0.2 },
			}}
			className={`group relative overflow-hidden rounded-2xl border ${config.borderColor} bg-gradient-to-br ${config.bgGradient} p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl`}
			aria-labelledby={`project-${index}-title`}
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
						{githubUrl && (
							<motion.a
								href={githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="rounded-full bg-white/10 p-2 text-white/60 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
							>
								<Github className="h-4 w-4" />
							</motion.a>
						)}
						{liveUrl && (
							<motion.a
								href={liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="rounded-full bg-white/10 p-2 text-white/60 backdrop-blur-sm transition-colors hover:bg-white/20 hover:text-white"
							>
								<ExternalLink className="h-4 w-4" />
							</motion.a>
						)}
					</div>
				</div>

				{/* Title and Description */}
				<h3 id={`project-${index}-title`} className="mb-3 font-bold text-white text-xl transition-colors group-hover:text-white/90">
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
		</motion.article>
	);
};

export default ProjectCard;
