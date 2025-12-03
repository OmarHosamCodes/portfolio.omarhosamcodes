// Google Analytics and SEO tracking configuration

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Google Analytics tracking functions
export const gtag = (...args: unknown[]) => {
	if (typeof window !== "undefined" && (window as any).gtag) {
		(window as any).gtag(...args);
	}
};

export const pageview = (url: string) => {
	gtag("config", GA_TRACKING_ID, {
		page_path: url,
	});
};

export const event = ({
	action,
	category,
	label,
	value,
}: {
	action: string;
	category: string;
	label?: string;
	value?: number;
}) => {
	gtag("event", action, {
		event_category: category,
		event_label: label,
		value: value,
	});
};

// SEO tracking events
export const trackProjectView = (projectTitle: string, category: string) => {
	event({
		action: "view_project",
		category: "portfolio",
		label: `${category}:${projectTitle}`,
	});
};

export const trackContactForm = (formType: "submit" | "error") => {
	event({
		action: `contact_form_${formType}`,
		category: "engagement",
		label: "contact_form",
	});
};

export const trackSocialClick = (platform: string) => {
	event({
		action: "social_click",
		category: "engagement",
		label: platform,
	});
};
