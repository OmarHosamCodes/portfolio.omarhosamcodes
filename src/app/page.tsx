import ProjectCard from "@/components/ProjectCard";

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
		<main className="min-h-screen bg-background text-white">
			<div className="container mx-auto px-4 py-16">
				<section className="mb-16 text-center">
					<h1 className="font-extrabold text-5xl tracking-tight sm:text-[5rem]">
						Omar Hosam
					</h1>
					<p className="mt-4 text-2xl">
						Full-Stack Developer & Tech Enthusiast
					</p>
					<p className="mx-auto mt-6 max-w-2xl text-lg">
						I build robust and scalable web applications, CLI tools, and
						everything in between. Explore my work below.
					</p>
				</section>

				<div className="space-y-16">
					{Object.entries(projects).map(([category, projectList]) => (
						<section key={category}>
							<h2 className="mb-8 font-bold text-3xl capitalize">
								{category.replace(/_/g, " ")}
							</h2>
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								{projectList.map((project) => (
									<ProjectCard
										key={project.title}
										title={project.title}
										description={project.description}
										tags={project.tags}
									/>
								))}
							</div>
						</section>
					))}
				</div>
			</div>
		</main>
	);
}
