"use client";

import { sectionVariants, titleVariants } from "@/constants";
import { formatCategoryTitle, getCategoryConfig } from "@/lib/project-utils";
import type { Project, ProjectCategoryKey } from "@/types";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface ProjectSectionProps {
	category: ProjectCategoryKey;
	projects: Project[];
}

const ProjectSection = ({ category, projects }: ProjectSectionProps) => {
	const config = getCategoryConfig(category);
	const Icon = config.icon;
	const formattedTitle = formatCategoryTitle(category);

	return (
		<motion.section
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className="mb-20"
			aria-labelledby={`${category}-heading`}
		>
			<motion.header
				variants={titleVariants}
				className="mb-12 flex items-center space-x-4"
			>
				<div className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 p-3 shadow-lg" aria-hidden="true">
					<Icon className="h-8 w-8 text-white" />
				</div>
				<div>
					<h2 id={`${category}-heading`} className="font-bold text-4xl text-white">{formattedTitle}</h2>
					<div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" aria-hidden="true" />
				</div>
			</motion.header>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.title}
						{...project}
						category={category}
						index={index}
					/>
				))}
			</div>
		</motion.section>
	);
};

export default ProjectSection;
