import { isAuthenticated } from "@/actions/auth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { redirect } from "next/navigation";

export default async function ProtectedAdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const authenticated = await isAuthenticated();

	if (!authenticated) {
		redirect("/admin/login");
	}

	return (
		<div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
			<AdminSidebar />
			<main className="flex-1 overflow-y-auto p-8">{children}</main>
		</div>
	);
}
