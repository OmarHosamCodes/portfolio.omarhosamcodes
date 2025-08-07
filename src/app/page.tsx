import AboutSection from "@/components/AboutSection";
import AppBar from "@/components/AppBar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import { projectsData } from "@/data";
import type { ProjectCategoryKey } from "@/types";

export default function HomePage() {
	const projects = projectsData;
	const categories = Object.keys(projects) as ProjectCategoryKey[];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
			<AppBar />

			<main>
				<HeroSection />

				<section id="projects" className="container mx-auto px-4 pt-20">
					<div className="mb-16 text-center">
						<h2 className="mb-6 font-bold text-5xl text-white">
							My{" "}
							<span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
								Projects
							</span>
						</h2>
						<p className="mx-auto max-w-3xl text-gray-300 text-xl">
							Explore my diverse portfolio of web applications, tools, and
							digital solutions. Each project represents a unique challenge and
							creative solution.
						</p>
					</div>

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
