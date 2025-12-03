import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Page Not Found",
	description: "The page you're looking for doesn't exist. Return to Omar Hosam's portfolio.",
};

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
			<div className="text-center">
				<h1 className="mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-bold text-6xl text-transparent">
					404
				</h1>
				<h2 className="mb-6 font-bold text-2xl text-white">Page Not Found</h2>
				<p className="mb-8 text-gray-400">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<Button
					asChild
					className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700"
				>
					<Link href="/">Return Home</Link>
				</Button>
			</div>
		</div>
	);
}
