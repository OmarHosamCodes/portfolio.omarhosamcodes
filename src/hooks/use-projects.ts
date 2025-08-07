import {
	getAllProjects,
	getCategories,
	getProjectsByCategory,
	getTotalProjectsCount,
} from "@/services";
import type { ProjectCategoryKey } from "@/types";
import { useMemo } from "react";

export function useProjects() {
	const projects = useMemo(() => getAllProjects(), []);

	const getProjectsByCategoryMemo = useMemo(
		() => (category: ProjectCategoryKey) => getProjectsByCategory(category),
		[],
	);

	const getAllCategories = useMemo(() => getCategories(), []);

	const totalProjectsCount = useMemo(() => getTotalProjectsCount(), []);

	return {
		projects,
		getProjectsByCategory: getProjectsByCategoryMemo,
		getAllCategories,
		totalProjectsCount,
	};
}
