"use client";

import { login } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" className="w-full" disabled={pending}>
			{pending ? "Signing in..." : "Sign in"}
		</Button>
	);
}

export default function AdminLoginPage() {
	const [error, setError] = useState<string | null>(null);

	async function handleSubmit(formData: FormData) {
		const result = await login(formData);
		if (result?.error) {
			setError(result.error);
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
			<div className="w-full max-w-md space-y-8">
				<div>
					<h2 className="mt-6 text-center font-extrabold text-3xl text-gray-900 dark:text-white">
						Admin Login
					</h2>
					<p className="mt-2 text-center text-gray-600 text-sm dark:text-gray-400">
						Please sign in to access the admin panel
					</p>
				</div>
				<form className="mt-8 space-y-6" action={handleSubmit}>
					<div className="-space-y-px rounded-md shadow-sm">
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
								placeholder="Password"
							/>
						</div>
					</div>

					{error && (
						<div className="text-center text-red-500 text-sm">{error}</div>
					)}

					<div>
						<SubmitButton />
					</div>
				</form>
			</div>
		</div>
	);
}
