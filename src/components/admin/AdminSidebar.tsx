"use client";

import { logout } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Inbox, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AdminSidebar() {
	const pathname = usePathname();

	return (
		<div className="flex min-h-screen w-64 flex-col border-gray-200 border-r bg-white dark:border-gray-700 dark:bg-gray-800">
			<div className="p-6">
				<h1 className="font-bold text-gray-900 text-xl dark:text-white">
					Admin Panel
				</h1>
			</div>
			<nav className="flex-1 space-y-2 px-4">
				<Link
					href="/admin/inbox"
					className={`flex items-center rounded-md px-4 py-2 font-medium text-sm ${
						pathname === "/admin/inbox"
							? "bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white"
							: "text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
					}`}
				>
					<Inbox className="mr-3 h-5 w-5" />
					Inbox
				</Link>
			</nav>
			<div className="border-gray-200 border-t p-4 dark:border-gray-700">
				<form action={logout}>
					<Button
						variant="ghost"
						className="flex w-full items-center justify-start text-red-600 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-900/20"
					>
						<LogOut className="mr-3 h-5 w-5" />
						Logout
					</Button>
				</form>
			</div>
		</div>
	);
}
