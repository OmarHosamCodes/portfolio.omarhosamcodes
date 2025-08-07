"use client";

import { Button } from "@/components/ui/button";
import { type Easing, motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut" as const,
			},
		},
	};

	const floatingVariants = {
		animate: {
			y: [-10, 10, -10],
			rotate: [0, 5, -5, 0],
			transition: {
				duration: 6,
				repeat: Number.POSITIVE_INFINITY,
				ease: "easeInOut" as Easing,
			},
		},
	};

	return (
		<section
			id="home"
			className="relative flex min-h-screen items-center justify-center overflow-hidden"
		>
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />

			{/* Floating Elements */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={`floating-${i}-${Math.random()}`}
						variants={floatingVariants}
						animate="animate"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						transition={{
							delay: Math.random() * 5,
							duration: 4 + Math.random() * 4,
						}}
						className="absolute h-2 w-2 rounded-full bg-white/20"
					/>
				))}
			</div>

			{/* Main Content */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="container relative z-10 mx-auto px-4 text-center"
			>
				<motion.div variants={itemVariants} className="mb-6">
					<div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
						<Sparkles className="h-4 w-4 text-yellow-400" />
						<span className="text-gray-300 text-sm">
							Welcome to my digital world
						</span>
					</div>
				</motion.div>

				<motion.h1
					variants={itemVariants}
					className="mb-6 font-extrabold text-5xl tracking-tight md:text-7xl lg:text-8xl"
				>
					<span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
						Omar Hosam
					</span>
				</motion.h1>

				<motion.div variants={itemVariants} className="mb-8">
					<h2 className="mb-4 font-bold text-2xl text-white md:text-4xl">
						Full-Stack Developer & Tech Enthusiast
					</h2>
					<p className="mx-auto max-w-3xl text-gray-300 text-lg leading-relaxed md:text-xl">
						I build robust and scalable web applications, CLI tools, and
						everything in between. Transforming ideas into digital reality with
						modern technologies and creative solutions.
					</p>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="mb-12 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
				>
					<Button
						size="lg"
						className="transform rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700"
						asChild
					>
						<a href="#projects">View My Work</a>
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="rounded-full border-white/30 px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white/10"
						asChild
					>
						<a href="#contact">Get In Touch</a>
					</Button>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="flex items-center justify-center space-x-8 text-gray-400 text-sm"
				>
					<div className="flex items-center space-x-2">
						<div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
						<span>Available for projects</span>
					</div>
					<div className="hidden h-4 w-px bg-gray-600 sm:block" />
					<div className="flex items-center space-x-2">
						<span>Based in</span>
						<span className="font-medium text-white">Egypt</span>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
