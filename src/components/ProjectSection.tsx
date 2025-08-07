"use client";

import { motion } from "framer-motion";
import {
	BarChart3,
	Code2,
	Database,
	Globe,
	Smartphone,
	Terminal,
} from "lucide-react";
import ProjectCard from "./ProjectCard";

interface Project {
	title: string;
	description: string;
	tags: string[];
}

interface ProjectSectionProps {
	category: string;
	projects: Project[];
}

const categoryIcons = {
	websites: Globe,
	wordpress: Code2,
	cli: Terminal,
	databases: Database,
	analytics: BarChart3,
	mobile: Smartphone,
	apis: Code2,
};

const sectionVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const titleVariants = {
	hidden: { opacity: 0, x: -30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const ProjectSection = ({ category, projects }: ProjectSectionProps) => {
	const Icon = categoryIcons[category as keyof typeof categoryIcons] || Globe;
	const formattedTitle = category
		.replace(/_/g, " ")
		.replace(/\b\w/g, (l) => l.toUpperCase());

	return (
		<motion.section
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-100px" }}
			className="mb-20"
		>
			<motion.div
				variants={titleVariants}
				className="mb-12 flex items-center space-x-4"
			>
				<div className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 p-3 shadow-lg">
					<Icon className="h-8 w-8 text-white" />
				</div>
				<div>
					<h2 className="font-bold text-4xl text-white">{formattedTitle}</h2>
					<div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
				</div>
			</motion.div>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						tags={project.tags}
						category={category}
						index={index}
					/>
				))}
			</div>
		</motion.section>
	);
};

export default ProjectSection;
