import Script from "next/script";

export default function StructuredData() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Omar Hosam",
		jobTitle: "Full-Stack Developer",
		description: "Full-Stack Developer & Tech Enthusiast specializing in web applications, CLI tools, and digital solutions.",
		url: "https://omarhosamcodes.com",
		sameAs: [
			"https://github.com/omarhosamcodes",
			"https://linkedin.com/in/omarhosamcodes",
		],
		address: {
			"@type": "Place",
			addressCountry: "Egypt",
		},
		knowsAbout: [
			"JavaScript",
			"TypeScript",
			"React",
			"Next.js",
			"Node.js",
			"PHP",
			"WordPress",
			"PostgreSQL",
			"MongoDB",
			"Flutter",
			"React Native",
			"Rust",
			"Python",
		],
		worksFor: {
			"@type": "Organization",
			name: "Freelance",
		},
	};

	return (
		<Script
			id="structured-data"
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
			}}
		/>
	);
}
