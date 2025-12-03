import { CATEGORY_CONFIG } from "@/constants";
import type { ProjectCategoryKey } from "@/types";

export function formatCategoryTitle(category: ProjectCategoryKey): string {
	return (
		CATEGORY_CONFIG[category]?.title ??
		category.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
	);
}

export function getCategoryConfig(category: ProjectCategoryKey) {
	return CATEGORY_CONFIG[category] ?? CATEGORY_CONFIG.websites;
}
