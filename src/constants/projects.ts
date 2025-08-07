import type { ProjectCategoryKey } from "@/types";
import {
	BarChart3,
	Code2,
	Database,
	Globe,
	type LucideIcon,
	Smartphone,
	Terminal,
} from "lucide-react";

export const CATEGORY_ICONS = {
	websites: Globe,
	wordpress: Code2,
	cli: Terminal,
	databases: Database,
	analytics: BarChart3,
	mobile: Smartphone,
	apis: Code2,
} as const;

export const CATEGORY_CONFIG = {
	websites: {
		icon: Globe,
		gradient: "from-blue-500 to-cyan-500",
		bgGradient: "from-blue-500/10 to-cyan-500/10",
		borderColor: "border-blue-500/30",
		tagStyle: "bg-blue-400/20 text-blue-300",
		title: "Websites",
	},
	wordpress: {
		icon: Code2,
		gradient: "from-indigo-500 to-purple-500",
		bgGradient: "from-indigo-500/10 to-purple-500/10",
		borderColor: "border-indigo-500/30",
		tagStyle: "bg-indigo-400/20 text-indigo-300",
		title: "WordPress",
	},
	cli: {
		icon: Terminal,
		gradient: "from-green-500 to-emerald-500",
		bgGradient: "from-green-500/10 to-emerald-500/10",
		borderColor: "border-green-500/30",
		tagStyle: "bg-green-400/20 text-green-300",
		title: "CLI Tools",
	},
	databases: {
		icon: Database,
		gradient: "from-orange-500 to-red-500",
		bgGradient: "from-orange-500/10 to-red-500/10",
		borderColor: "border-orange-500/30",
		tagStyle: "bg-orange-400/20 text-orange-300",
		title: "Databases",
	},
	analytics: {
		icon: BarChart3,
		gradient: "from-pink-500 to-rose-500",
		bgGradient: "from-pink-500/10 to-rose-500/10",
		borderColor: "border-pink-500/30",
		tagStyle: "bg-pink-400/20 text-pink-300",
		title: "Analytics",
	},
	mobile: {
		icon: Smartphone,
		gradient: "from-violet-500 to-purple-500",
		bgGradient: "from-violet-500/10 to-purple-500/10",
		borderColor: "border-violet-500/30",
		tagStyle: "bg-violet-400/20 text-violet-300",
		title: "Mobile Apps",
	},
	apis: {
		icon: Code2,
		gradient: "from-teal-500 to-cyan-500",
		bgGradient: "from-teal-500/10 to-cyan-500/10",
		borderColor: "border-teal-500/30",
		tagStyle: "bg-teal-400/20 text-teal-300",
		title: "APIs",
	},
} as const satisfies Record<
	ProjectCategoryKey,
	{
		icon: LucideIcon;
		gradient: string;
		bgGradient: string;
		borderColor: string;
		tagStyle: string;
		title: string;
	}
>;
