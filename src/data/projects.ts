import type { ProjectsData } from "@/types";

export const projectsData: ProjectsData = {
	websites: [
		{
			title: "Ahmed Fahmy Gallery",
			description: "A personal website showcasing Ahmed Fahmy's portfolio.",
			tags: ["Vite", "TypeScript", "Firebase", "Tailwind CSS"],
		},
		{
			title: "Eco Bids",
			description: "A platform for eco-friendly product auctions.",
			tags: [
				"Next.js",
				"React",
				"Tailwind CSS",
				"Supabase",
				"TypeScript",
				"Bun",
				"ExpressJS",
			],
		},
		{
			title: "Atoms",
			description: "A learning platform for Atoms Academy.",
			tags: [
				"Next.js",
				"Tailwind CSS",
				"TypeScript",
				"Prisma",
				"PostgreSQL",
				"Supabase",
			],
		},
	],
	wordpress: [
		{
			title: "Snipps",
			description:
				"A powerful WordPress plugin that automatically manages code snippets (JavaScript, CSS, HTML, and PHP) with an intuitive admin interface for controlling where and when they are active.",
			tags: ["PHP", "WordPress", "MySQL", "JavaScript", "CSS", "HTML"],
		},
		{
			title: "Order Manager Plus",
			description:
				"A comprehensive WooCommerce extension that provides enhanced order management capabilities through a customizable order table, invoice generation, and order editing features.",
			tags: ["PHP", "WordPress", "React", "WooCommerce", "MySQL"],
		},
		{
			title: "Easy Password",
			description:
				"A WordPress plugin that creates a shortcode for generating and managing user passwords.",
			tags: ["PHP", "WordPress", "JavaScript", "CSS", "MySQL"],
		},
		{
			title: "Next Order Plus",
			description:
				"A highly optimized WooCommerce plugin that automatically applies a promotional discount.",
			tags: ["PHP", "WordPress", "JavaScript", "CSS", "MySQL"],
		},
		{
			title: "SMSEG WooCommerce Integration",
			description:
				"A WordPress plugin that integrates WooCommerce with the SMSEG SMS gateway for sending order notifications.",
			tags: ["PHP", "WordPress", "JavaScript", "CSS", "MySQL"],
		},
	],
	cli: [
		{
			title: "SQL Splitter",
			description:
				"A CLI tool to quickly split SQL files into smaller, more manageable chunks.",
			tags: ["Rust", "SQL", "CLI", "Clap"],
		},
		{
			title: "WP Spotlight",
			description: "A CLI tool for managing WordPress plugins and themes.",
			tags: ["Rust", "CLI", "Clap", "CSV", "Serde"],
		},
	],
	databases: [
		{
			title: "Atoms Academy Database",
			description: "The database schema for the Atoms Academy platform.",
			tags: ["PostgreSQL", "Prisma"],
		},
		{
			title: "Eco Bids Database",
			description: "The database schema for the Eco Bids platform.",
			tags: ["PostgreSQL", "Supabase"],
		},
		{
			title: "Loyalty Program Database",
			description: "The database schema for the Loyalty Program API.",
			tags: ["PostgreSQL", "Express"],
		},
		{
			title: "Quantum Muscle Database",
			description: "The database schema for the Quantum Muscle app.",
			tags: ["PostgreSQL", "Supabase"],
		},
		{
			title: "Odoo WooCommerce Connector Database",
			description:
				"The database schema for the Odoo WooCommerce Connector API.",
			tags: ["SQLite", "Odoo", "WooCommerce"],
		},
		{
			title: "Bidding Database",
			description: "The database schema for the Bidding API.",
			tags: ["PostgreSQL", "Express"],
		},
		{
			title: "Gallery Database",
			description: "The database schema for the Gallery API.",
			tags: ["Firestore", "Firebase"],
		},
	],
	analytics: [
		{
			title: "Loyal Rev Analytics And Retention Dashboard",
			description:
				"A dashboard for tracking user engagement and retention in a loyalty program.",
			tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
		},
	],
	mobile: [
		{
			title: "Quantum Muscle",
			description:
				"A cross-platform mobile app for managing programs and workouts with a focus on user experience and collaboration.",
			tags: ["React Native", "Expo", "Supabase", "TypeScript", "Tailwind CSS"],
		},
		{
			title: "Sportion",
			description:
				"A simple app for calculating your daily caloric intake based on your weight, height, age, and activity level. It also provides a list of recommended foods to help you reach your daily caloric intake.",
			tags: ["Flutter", "Dart", "SQLite", "Rapid API", "Api Ninja", "Riverpod"],
		},
		{
			title: "Connectify",
			description:
				"A platform that allows users to connect with others who share the same interests and hobbies to help people find new friends and build a community around their interests. Users can also create groups and invite others to join.",
			tags: ["Flutter", "Dart", "Firebase", "Provider"],
		},
		{
			title: "El Player",
			description:
				"A music player app that allows users to play music from their local storage and create playlists.",
			tags: ["Flutter", "Dart", "AsyncStorage", "GetX", "Audio Service"],
		},

		{
			title: "Pattern Background Package",
			description:
				"A Flutter package for generating pattern backgrounds with customizable colors and styles.",
			tags: ["Flutter", "Dart", "AsyncStorage"],
		},
	],
	apis: [
		{
			title: "Loyal Rev API",
			description:
				"A RESTful API for managing a loyalty program, including user rewards and transactions.",
			tags: ["Bun", "Express", "PostgreSQL", "TypeScript"],
		},
		{
			title: "Atoms Academy API",
			description:
				"An API for managing courses, lessons, and user progress in the Atoms Academy platform.",
			tags: ["Next.js", "Drizzle", "PostgreSQL", "TypeScript", "Supabase"],
		},
		{
			title: "Quantum Muscle API",
			description:
				"An API for managing workout programs, exercises, and user progress in the Quantum Muscle app.",
			tags: ["Supabase", "TypeScript", "PostgreSQL"],
		},
		{
			title: "Odoo WooCommerce Connector API",
			description:
				"An API for integrating Odoo with WooCommerce two-way synchronization.",
			tags: ["Python", "Odoo", "WooCommerce", "REST API", "SQLite", "FastAPI"],
		},
		{
			title: "Bidding API",
			description:
				"An API for managing auctions and bids on eco-friendly products.",
			tags: ["Bun", "Express", "PostgreSQL"],
		},
		{
			title: "Gallery API",
			description:
				"A secure API for managing user-generated content, including image uploads and galleries.",
			tags: ["Bun", "Firestore", "TypeScript"],
		},
	],
};
