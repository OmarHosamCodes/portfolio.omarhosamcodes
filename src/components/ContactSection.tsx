"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.min(2, "Name must be at least 2 characters"),
	email: z
		.string()
		.min(1, "Email is required")
		.email("Please enter a valid email"),
	subject: z
		.string()
		.min(1, "Subject is required")
		.min(5, "Subject must be at least 5 characters"),
	message: z
		.string()
		.min(1, "Message is required")
		.min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "contact@omarhosamcodes.com",
			href: "mailto:contact@omarhosamcodes.com",
			color: "from-blue-400 to-cyan-500",
		},
	];

	const socialLinks = [
		{
			icon: Github,
			label: "GitHub",
			href: "https://github.com/omarhosamcodes",
			color: "hover:text-gray-300",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: "https://linkedin.com/in/omarhosamcodes",
			color: "hover:text-blue-400",
		},
		{
			icon: Mail,
			label: "Email",
			href: "mailto:contact@omarhosamcodes.com",
			color: "hover:text-red-400",
		},
	];

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);

		try {
			// Simulate form submission
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// Reset form
			reset();

			// You would typically send this data to your backend here
			alert("Thank you for your message! I'll get back to you soon.");
		} catch (error) {
			alert("Something went wrong. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="contact" className="container mx-auto px-4 py-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="mb-16 text-center"
			>
				<h2 className="mb-6 font-bold text-5xl text-white">
					Get In{" "}
					<span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
						Touch
					</span>
				</h2>
				<p className="mx-auto max-w-3xl text-gray-300 text-xl">
					Have a project in mind or want to discuss opportunities? I'd love to
					hear from you. Let's create something amazing together.
				</p>
			</motion.div>

			<div className="grid gap-12 lg:grid-cols-2">
				{/* Contact Information */}
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="space-y-8"
				>
					<div>
						<h3 className="mb-6 font-semibold text-2xl text-white">
							Contact Information
						</h3>
						<div className="space-y-4">
							{contactInfo.map((info) => (
								<motion.a
									key={info.label}
									href={info.href}
									whileHover={{ scale: 1.02, x: 5 }}
									className="flex items-center space-x-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
								>
									<div
										className={`rounded-lg bg-gradient-to-r ${info.color} p-3`}
									>
										<info.icon className="h-5 w-5 text-white" />
									</div>
									<div>
										<div className="font-medium text-white">{info.label}</div>
										<div className="text-gray-400 text-sm">{info.value}</div>
									</div>
								</motion.a>
							))}
						</div>
					</div>

					{/* Social Links */}
					<div>
						<h3 className="mb-6 font-semibold text-2xl text-white">
							Follow Me
						</h3>
						<div className="flex space-x-4">
							{socialLinks.map((social) => (
								<motion.a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
									className={`rounded-full border border-white/20 bg-white/5 p-3 text-white/60 backdrop-blur-sm transition-all duration-200 ${social.color}`}
								>
									<social.icon size={20} />
								</motion.a>
							))}
						</div>
					</div>

					{/* Availability */}
					<div className="rounded-lg border border-green-500/20 bg-green-500/5 p-6">
						<div className="flex items-center space-x-2">
							<div className="h-3 w-3 rounded-full bg-green-500" />
							<span className="font-medium text-green-400">
								Available for new projects
							</span>
						</div>
						<p className="mt-2 text-gray-400 text-sm">
							I'm currently accepting new freelance projects and full-time
							opportunities.
						</p>
					</div>
				</motion.div>

				{/* Contact Form */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div className="grid gap-6 md:grid-cols-2">
							<div>
								<label
									htmlFor="name"
									className="mb-2 block font-medium text-sm text-white"
								>
									Name *
								</label>
								<input
									type="text"
									id="name"
									{...register("name")}
									className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
										errors.name
											? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
											: "border-white/20 focus:border-purple-500 focus:ring-purple-500/20"
									}`}
									placeholder="Your name"
								/>
								{errors.name && (
									<p className="mt-1 text-red-400 text-sm">
										{errors.name.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="email"
									className="mb-2 block font-medium text-sm text-white"
								>
									Email *
								</label>
								<input
									type="email"
									id="email"
									{...register("email")}
									className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
										errors.email
											? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
											: "border-white/20 focus:border-purple-500 focus:ring-purple-500/20"
									}`}
									placeholder="your@email.com"
								/>
								{errors.email && (
									<p className="mt-1 text-red-400 text-sm">
										{errors.email.message}
									</p>
								)}
							</div>
						</div>

						<div>
							<label
								htmlFor="subject"
								className="mb-2 block font-medium text-sm text-white"
							>
								Subject *
							</label>
							<input
								type="text"
								id="subject"
								{...register("subject")}
								className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
									errors.subject
										? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
										: "border-white/20 focus:border-purple-500 focus:ring-purple-500/20"
								}`}
								placeholder="Project inquiry, collaboration, etc."
							/>
							{errors.subject && (
								<p className="mt-1 text-red-400 text-sm">
									{errors.subject.message}
								</p>
							)}
						</div>

						<div>
							<label
								htmlFor="message"
								className="mb-2 block font-medium text-sm text-white"
							>
								Message *
							</label>
							<textarea
								id="message"
								{...register("message")}
								rows={6}
								className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 ${
									errors.message
										? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
										: "border-white/20 focus:border-purple-500 focus:ring-purple-500/20"
								}`}
								placeholder="Tell me about your project or what you'd like to discuss..."
							/>
							{errors.message && (
								<p className="mt-1 text-red-400 text-sm">
									{errors.message.message}
								</p>
							)}
						</div>

						<motion.button
							type="submit"
							disabled={isSubmitting}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-medium text-white transition-all duration-200 hover:from-purple-700 hover:to-pink-700 disabled:cursor-not-allowed disabled:opacity-50"
						>
							<div className="flex items-center justify-center space-x-2">
								{isSubmitting ? (
									<>
										<div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
										<span>Sending...</span>
									</>
								) : (
									<>
										<Send size={18} />
										<span>Send Message</span>
									</>
								)}
							</div>
						</motion.button>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;
