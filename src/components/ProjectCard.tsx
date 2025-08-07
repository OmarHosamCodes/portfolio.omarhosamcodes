"use client";

import { motion } from "framer-motion";
import type { FC } from "react";

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
}

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description, tags }) => {
	return (
		<motion.div
			variants={cardVariants}
			className="flex h-full flex-col rounded-xl bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-2xl"
		>
			<h3 className="mb-3 font-bold text-2xl text-white">{title}</h3>
			<p className="mb-4 flex-grow text-gray-300">{description}</p>
			<div className="mt-auto flex flex-wrap gap-2">
				{tags.map((tag) => (
					<span
						key={tag}
						className="rounded-full bg-purple-400/20 px-3 py-1 font-medium text-purple-300 text-sm"
					>
						{tag}
					</span>
				))}
			</div>
		</motion.div>
	);
};

export default ProjectCard;
