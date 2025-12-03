"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "admin_session";
const MAX_AGE = 60 * 60 * 24; // 24 hours

export async function login(formData: FormData) {
	const password = formData.get("password") as string;
	const adminPassword = process.env.ADMIN_PASSWORD;

	if (!adminPassword) {
		console.error("ADMIN_PASSWORD is not set in environment variables");
		return { error: "Server configuration error" };
	}

	if (password === adminPassword) {
		const cookieStore = await cookies();
		cookieStore.set(COOKIE_NAME, "true", {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			maxAge: MAX_AGE,
			path: "/",
		});
		redirect("/admin/inbox");
	} else {
		return { error: "Invalid password" };
	}
}

export async function logout() {
	const cookieStore = await cookies();
	cookieStore.delete(COOKIE_NAME);
	redirect("/admin/login");
}

export async function isAuthenticated() {
	const cookieStore = await cookies();
	return cookieStore.has(COOKIE_NAME);
}
