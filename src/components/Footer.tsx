"use client";

import { motion } from "framer-motion";
import { Code, Coffee, Heart } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<motion.footer
			initial={{ y: 50, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			viewport={{ once: true }}
			className="mt-20 border-white/10 border-t bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm"
		>
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{/* About Section */}
					<div className="space-y-4">
						<h3 className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-bold text-transparent text-xl">
							Omar Hosam
						</h3>
						<p className="text-gray-300 text-sm leading-relaxed">
							Passionate full-stack developer creating digital experiences that
							matter. Turning ideas into reality, one line of code at a time.
						</p>
						<div className="flex items-center space-x-2 text-gray-400 text-sm">
							<span>Made with</span>
							<motion.div
								animate={{ scale: [1, 1.2, 1] }}
								transition={{
									duration: 1,
									repeat: Number.POSITIVE_INFINITY,
									ease: "easeInOut",
								}}
							>
								<Heart size={16} className="text-red-500" />
							</motion.div>
							<span>&</span>
							<Code size={16} className="text-blue-400" />
							<span>&</span>
							<Coffee size={16} className="text-yellow-600" />
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="font-bold text-white text-xl">Quick Links</h3>
						<div className="space-y-2">
							{[
								{ label: "Home", href: "#home" },
								{ label: "Projects", href: "#projects" },
								{ label: "About", href: "#about" },
								{ label: "Contact", href: "#contact" },
							].map((link) => (
								<motion.a
									key={link.label}
									href={link.href}
									whileHover={{ x: 5 }}
									className="block text-gray-300 text-sm transition-colors duration-200 hover:text-white"
								>
									{link.label}
								</motion.a>
							))}
						</div>
					</div>

					{/* Technologies */}
					<div className="space-y-4">
						<h3 className="font-bold text-white text-xl">Technologies</h3>
						<div className="flex flex-wrap gap-2">
							{[
								"Next.js",
								"React",
								"TypeScript",
								"Node.js",
								"PostgreSQL",
								"MongoDB",
								"Tailwind CSS",
								"Framer Motion",
							].map((tech) => (
								<motion.span
									key={tech}
									whileHover={{ scale: 1.05 }}
									className="rounded-full bg-white/10 px-3 py-1 text-gray-300 text-xs transition-colors duration-200 hover:bg-white/20"
								>
									{tech}
								</motion.span>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.6 }}
					viewport={{ once: true }}
					className="mt-8 border-white/10 border-t pt-8 text-center"
				>
					<div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
						<p className="text-gray-400 text-sm">
							© {currentYear} Omar Hosam. All rights reserved.
						</p>
						<div className="flex items-center space-x-6 text-gray-400 text-sm">
							<motion.a
								href="/privacy"
								whileHover={{ scale: 1.05 }}
								className="transition-colors duration-200 hover:text-white"
							>
								Privacy Policy
							</motion.a>
							<motion.a
								href="/terms"
								whileHover={{ scale: 1.05 }}
								className="transition-colors duration-200 hover:text-white"
							>
								Terms of Service
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.footer>
	);
};

export default Footer;
