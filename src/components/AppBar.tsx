"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const AppBar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuItems = [
		{ label: "Home", href: "#home" },
		{ label: "Projects", href: "#projects" },
		{ label: "About", href: "#about" },
		{ label: "Contact", href: "#contact" },
	];

	const socialLinks = [
		{
			icon: Github,
			href: "https://github.com/omarhosamcodes",
			label: "GitHub",
		},
		{
			icon: Linkedin,
			href: "https://linkedin.com/in/omarhosamcodes",
			label: "LinkedIn",
		},
		{ icon: Mail, href: "mailto:omar@omarhosamcodes.com", label: "Email" },
	];

	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="fixed top-0 z-50 w-full border-white/10 border-b bg-black/20 backdrop-blur-xl"
		>
			<nav className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text font-bold text-2xl text-transparent"
					>
						Omar Hosam
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden items-center space-x-8 md:flex">
						{menuItems.map((item) => (
							<motion.a
								key={item.label}
								href={item.href}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className="group relative text-white/80 transition-colors duration-200 hover:text-white"
							>
								{item.label}
								<motion.div
									className="-bottom-1 absolute left-0 h-0.5 origin-left bg-gradient-to-r from-purple-400 to-pink-500"
									initial={{ scaleX: 0 }}
									whileHover={{ scaleX: 1 }}
									transition={{ duration: 0.2 }}
								/>
							</motion.a>
						))}
					</div>

					{/* Social Links - Desktop */}
					<div className="hidden items-center space-x-4 md:flex">
						{socialLinks.map((social) => (
							<motion.a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.2, rotate: 5 }}
								whileTap={{ scale: 0.9 }}
								className="rounded-full p-2 text-white/60 transition-colors duration-200 hover:bg-white/10 hover:text-white"
							>
								<social.icon size={20} />
							</motion.a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<motion.button
						whileTap={{ scale: 0.9 }}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="rounded-lg p-2 text-white transition-colors duration-200 hover:bg-white/10 md:hidden"
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</motion.button>
				</div>

				{/* Mobile Menu */}
				<motion.div
					initial={false}
					animate={{
						height: isMobileMenuOpen ? "auto" : 0,
						opacity: isMobileMenuOpen ? 1 : 0,
					}}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="overflow-hidden md:hidden"
				>
					<div className="space-y-2 pt-4 pb-2">
						{menuItems.map((item) => (
							<motion.a
								key={item.label}
								href={item.href}
								whileTap={{ scale: 0.95 }}
								onClick={() => setIsMobileMenuOpen(false)}
								className="block rounded-lg px-4 py-2 text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
							>
								{item.label}
							</motion.a>
						))}
						<div className="flex items-center justify-center space-x-4 pt-4">
							{socialLinks.map((social) => (
								<motion.a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									whileTap={{ scale: 0.9 }}
									className="rounded-full p-2 text-white/60 transition-colors duration-200 hover:bg-white/10 hover:text-white"
								>
									<social.icon size={20} />
								</motion.a>
							))}
						</div>
					</div>
				</motion.div>
			</nav>
		</motion.header>
	);
};

export default AppBar;
