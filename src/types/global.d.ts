// Global type definitions for SEO and metadata

interface SEOConfig {
	title: string;
	description: string;
	keywords: string[];
	author: string;
	siteUrl: string;
	siteName: string;
	twitterHandle: string;
	locale: string;
}

interface StructuredDataPerson {
	"@context": string;
	"@type": "Person";
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	sameAs: string[];
	address: {
		"@type": "Place";
		addressCountry: string;
	};
	knowsAbout: string[];
	worksFor: {
		"@type": "Organization";
		name: string;
	};
}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DATABASE_URL: string;
			NEXTAUTH_SECRET: string;
			NEXTAUTH_URL: string;
		}
	}
}
