import AboutSection from "@/components/AboutSection";
import AppBar from "@/components/AppBar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function HomePage() {
	const projects = {
		websites: [
			{
				title: "E-commerce Platform",
				description:
					"A full-featured online store with a custom CMS and payment gateway integration.",
				tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
			},
			{
				title: "Portfolio Website",
				description: "A personal portfolio to showcase my projects and skills.",
				tags: ["Next.js", "React", "Tailwind CSS"],
			},
		],
		wordpress: [
			{
				title: "Custom Booking Plugin",
				description:
					"A WordPress plugin for managing appointments and bookings.",
				tags: ["PHP", "WordPress", "MySQL", "JavaScript"],
			},
			{
				title: "SEO Optimizer",
				description: "A plugin to improve SEO rankings by analyzing content.",
				tags: ["PHP", "WordPress", "React"],
			},
		],
		cli: [
			{
				title: "Scaffold Generator",
				description:
					"A CLI tool to quickly scaffold new projects with a predefined structure.",
				tags: ["Node.js", "TypeScript", "Commander.js"],
			},
			{
				title: "Database Migrator",
				description: "A CLI tool for managing database migrations and seeding.",
				tags: ["Go", "SQL"],
			},
		],
		databases: [
			{
				title: "Multi-tenant DB Schema",
				description:
					"A database architecture for a SaaS application supporting multiple tenants.",
				tags: ["PostgreSQL", "Database Design"],
			},
			{
				title: "Real-time Analytics DB",
				description: "A schema designed for a real-time analytics dashboard.",
				tags: ["ClickHouse", "SQL"],
			},
		],
		analytics: [
			{
				title: "Sales Dashboard",
				description:
					"An analytics page to visualize sales data and user behavior.",
				tags: ["React", "D3.js", "Chart.js"],
			},
			{
				title: "User Engagement Tracker",
				description: "A dashboard for tracking user engagement metrics.",
				tags: ["Next.js", "Vercel Analytics"],
			},
		],
		mobile: [
			{
				title: "Task Manager App",
				description:
					"A cross-platform mobile app for managing tasks and to-do lists.",
				tags: ["React Native", "Firebase"],
			},
			{
				title: "Workout Logger",
				description: "A mobile app to log workouts and track progress.",
				tags: ["Flutter", "Dart", "SQLite"],
			},
		],
		apis: [
			{
				title: "RESTful API for a Blog",
				description:
					"A RESTful API for a blogging platform with JWT authentication.",
				tags: ["Node.js", "Express", "MongoDB"],
			},
			{
				title: "GraphQL API for E-commerce",
				description: "A GraphQL API for an e-commerce platform.",
				tags: ["Apollo Server", "GraphQL", "PostgreSQL"],
			},
		],
	};

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

					{Object.entries(projects).map(([category, projectList]) => (
						<ProjectSection
							key={category}
							category={category}
							projects={projectList}
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
