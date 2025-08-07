"use client";

import { motion } from "framer-motion";
import {
	Code,
	Database,
	Globe,
	Smartphone,
	Terminal,
	Users,
} from "lucide-react";

const AboutSection = () => {
	const skills = [
		{
			icon: Globe,
			title: "Frontend Development",
			description: "React, Next.js, TypeScript, Tailwind CSS",
			color: "from-blue-400 to-cyan-500",
		},
		{
			icon: Database,
			title: "Backend Development",
			description: "Node.js, Express, PHP, Python, PostgreSQL, MongoDB",
			color: "from-green-400 to-emerald-500",
		},
		{
			icon: Smartphone,
			title: "Mobile Development",
			description: "React Native, Flutter, iOS, Android",
			color: "from-purple-400 to-violet-500",
		},
		{
			icon: Terminal,
			title: "DevOps & Tools",
			description: "Docker, AWS, Git, CI/CD, Linux",
			color: "from-orange-400 to-red-500",
		},
		{
			icon: Code,
			title: "Programming Languages",
			description: "JavaScript, TypeScript, Python, PHP, Go, Dart",
			color: "from-pink-400 to-rose-500",
		},
		{
			icon: Users,
			title: "Collaboration",
			description: "Agile, Scrum, Team Leadership, Code Review",
			color: "from-indigo-400 to-blue-500",
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut" as const,
			},
		},
	};

	return (
		<section id="about" className="container mx-auto px-4 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="mb-16 text-center"
			>
				<h2 className="mb-6 font-bold text-5xl text-white">
					About{" "}
					<span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
						Me
					</span>
				</h2>
				<div className="mx-auto max-w-4xl space-y-6 text-gray-300 text-lg">
					<p>
						I'm a passionate full-stack developer with over 5 years of
						experience creating innovative digital solutions. My journey in
						technology began with a curiosity about how things work, which
						evolved into a deep love for building applications that make a
						difference.
					</p>
					<p>
						I specialize in modern web technologies and have experience across
						the entire development lifecycle - from initial concept and design
						to deployment and maintenance. I believe in writing clean,
						maintainable code and following best practices.
					</p>
					<p>
						When I'm not coding, you can find me exploring new technologies,
						contributing to open-source projects, or sharing knowledge with the
						developer community.
					</p>
				</div>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
			>
				{skills.map((skill) => (
					<motion.div
						key={skill.title}
						variants={itemVariants}
						whileHover={{ scale: 1.05, y: -5 }}
						className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
					>
						<div className="mb-4 flex items-center">
							<div className={`rounded-lg bg-gradient-to-r ${skill.color} p-3`}>
								<skill.icon className="h-6 w-6 text-white" />
							</div>
						</div>
						<h3 className="mb-2 font-semibold text-white text-xl">
							{skill.title}
						</h3>
						<p className="text-gray-400 text-sm leading-relaxed">
							{skill.description}
						</p>
					</motion.div>
				))}
			</motion.div>

			{/* Stats Section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: true }}
				className="mt-20 grid gap-8 md:grid-cols-4"
			>
				{[
					{ number: "50+", label: "Projects Completed", id: "projects" },
					{ number: "5+", label: "Years Experience", id: "experience" },
					{ number: "20+", label: "Technologies", id: "technologies" },
					{ number: "100%", label: "Client Satisfaction", id: "satisfaction" },
				].map((stat) => (
					<motion.div
						key={stat.id}
						whileHover={{ scale: 1.05 }}
						className="text-center"
					>
						<div className="mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-bold text-4xl text-transparent">
							{stat.number}
						</div>
						<div className="text-gray-400 text-sm uppercase tracking-wider">
							{stat.label}
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default AboutSection;
