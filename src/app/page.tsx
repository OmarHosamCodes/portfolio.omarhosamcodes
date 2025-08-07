import AboutSection from "@/components/AboutSection";
import AppBar from "@/components/AppBar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import { projectsData } from "@/data";
import type { ProjectsData } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Omar Hosam Codes - Full-Stack Developer & Tech Enthusiast",
	description: "Welcome to my digital portfolio. Explore my diverse projects including web applications, WordPress plugins, CLI tools, and mobile apps. Available for freelance projects and full-time opportunities.",
	openGraph: {
		title: "Omar Hosam Codes - Full-Stack Developer & Tech Enthusiast",
		description: "Welcome to my digital portfolio. Explore my diverse projects including web applications, WordPress plugins, CLI tools, and mobile apps.",
		type: "website",
	},
};

export default function HomePage() {
	const projects = projectsData;
	const categories = Object.keys(projects) as (keyof ProjectsData)[];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
			<AppBar />

			<main id="main-content">
				<HeroSection />

				<section id="projects" className="container mx-auto px-4 pt-20" aria-labelledby="projects-heading">
					<header className="mb-16 text-center">
						<h1 id="projects-heading" className="mb-6 font-bold text-5xl text-white">
							My{" "}
							<span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
								Projects
							</span>
						</h1>
						<p className="mx-auto max-w-3xl text-gray-300 text-xl">
							Explore my diverse portfolio of web applications, tools, and
							digital solutions. Each project represents a unique challenge and
							creative solution.
						</p>
					</header>

					{categories.map((category) => (
						<ProjectSection
							key={category}
							category={category}
							projects={projects[category]}
						/>
					))}
				</section>

				<AboutSection />

				<ContactSection />
			</main>

			<Footer />
		</div>
	);
}
