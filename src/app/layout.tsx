import "@/styles/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
	title: "Omar Hosam Codes",
	description: "Nothing Beyond Your Imagination",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${poppins.variable} dark`}>
			<body>{children}</body>
		</html>
	);
}
