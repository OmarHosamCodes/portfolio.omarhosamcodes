import { projectsData } from "@/data";
import type { Project, ProjectCategoryKey, ProjectsData } from "@/types";

/**
 * Service layer for project-related operations
 * This abstraction allows for future implementations like API calls
 */

/**
 * Get all projects data
 */
export function getAllProjects(): ProjectsData {
	return projectsData;
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: ProjectCategoryKey): Project[] {
	return projectsData[category] ?? [];
}

/**
 * Get all available categories
 */
export function getCategories(): ProjectCategoryKey[] {
	return Object.keys(projectsData) as ProjectCategoryKey[];
}

/**
 * Search projects by title or description
 */
export function searchProjects(query: string): Project[] {
	const searchTerm = query.toLowerCase();
	const allProjects = Object.values(projectsData).flat();

	return allProjects.filter(
		(project) =>
			project.title.toLowerCase().includes(searchTerm) ||
			project.description.toLowerCase().includes(searchTerm) ||
			project.tags.some((tag: string) =>
				tag.toLowerCase().includes(searchTerm),
			),
	);
}

/**
 * Get projects by tag
 */
export function getProjectsByTag(tag: string): Project[] {
	const allProjects = Object.values(projectsData).flat();
	return allProjects.filter((project) =>
		project.tags.some(
			(projectTag: string) => projectTag.toLowerCase() === tag.toLowerCase(),
		),
	);
}

/**
 * Get total number of projects
 */
export function getTotalProjectsCount(): number {
	return Object.values(projectsData).reduce(
		(total, categoryProjects) => total + categoryProjects.length,
		0,
	);
}

/**
 * Get project by title (assuming titles are unique)
 */
export function getProjectByTitle(title: string): Project | undefined {
	const allProjects = Object.values(projectsData).flat();
	return allProjects.find(
		(project) => project.title.toLowerCase() === title.toLowerCase(),
	);
}
