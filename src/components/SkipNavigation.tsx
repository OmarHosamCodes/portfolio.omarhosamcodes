"use client";

const SkipNavigation = () => {
	return (
		<nav aria-label="Skip navigation" className="sr-only focus-within:not-sr-only">
			<a
				href="#main-content"
				className="fixed left-4 top-4 z-[9999] -translate-y-full scale-95 transform rounded-md bg-purple-600 px-4 py-2 text-white shadow-lg transition-transform focus:translate-y-0 focus:scale-100"
			>
				Skip to main content
			</a>
			<a
				href="#projects"
				className="fixed left-32 top-4 z-[9999] -translate-y-full scale-95 transform rounded-md bg-purple-600 px-4 py-2 text-white shadow-lg transition-transform focus:translate-y-0 focus:scale-100"
			>
				Skip to projects
			</a>
			<a
				href="#contact"
				className="fixed left-60 top-4 z-[9999] -translate-y-full scale-95 transform rounded-md bg-purple-600 px-4 py-2 text-white shadow-lg transition-transform focus:translate-y-0 focus:scale-100"
			>
				Skip to contact
			</a>
		</nav>
	);
};

export default SkipNavigation;
