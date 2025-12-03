export interface Project {
	title: string;
	description: string;
	tags: string[];
	githubUrl?: string;
	liveUrl?: string;
	imageUrl?: string;
}

export interface ProjectCategory {
	name: string;
	projects: Project[];
}

export type ProjectCategoryKey =
	| "websites"
	| "wordpress"
	| "cli"
	| "databases"
	| "analytics"
	| "mobile"
	| "apis";

export interface ProjectsData {
	websites: Project[];
	wordpress: Project[];
	cli: Project[];
	databases: Project[];
	analytics: Project[];
	mobile: Project[];
	apis: Project[];
}
