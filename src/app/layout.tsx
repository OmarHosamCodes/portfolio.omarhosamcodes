import "@/styles/globals.css";

import ErrorBoundary from "@/components/ErrorBoundary";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const siteUrl = "https://omarhosamcodes.com";
const siteName = "Omar Hosam Codes";
const siteDescription =
	"Full-Stack Developer & Tech Enthusiast. I build robust and scalable web applications, CLI tools, and digital solutions. Transforming ideas into reality with modern technologies.";

export const metadata: Metadata = {
	title: {
		default: siteName,
		template: `%s | ${siteName}`,
	},
	description: siteDescription,
	keywords: [
		"Omar Hosam",
		"Full Stack Developer",
		"Web Developer",
		"Next.js",
		"React",
		"TypeScript",
		"Node.js",
		"WordPress",
		"PHP",
		"Portfolio",
		"Egypt",
		"Software Engineer",
		"CLI Tools",
		"APIs",
		"Database Design",
		"Mobile Apps",
		"Frontend",
		"Backend",
	],
	authors: [{ name: "Omar Hosam", url: siteUrl }],
	creator: "Omar Hosam",
	publisher: "Omar Hosam",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL(siteUrl),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		title: siteName,
		description: siteDescription,
		siteName,
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Omar Hosam - Full-Stack Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteName,
		description: siteDescription,
		images: ["/og-image.jpg"],
		creator: "@omarhosamcodes",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
		other: [
			{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#8b5cf6" },
		],
	},
	manifest: "/manifest.json",
	category: "technology",
};

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
	display: "swap",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${poppins.variable} dark`}>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body className={poppins.className}>
				<ErrorBoundary>{children}</ErrorBoundary>
			</body>
		</html>
	);
}
