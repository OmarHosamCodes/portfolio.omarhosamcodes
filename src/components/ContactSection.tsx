"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "omar@omarhosamcodes.com",
			href: "mailto:omar@omarhosamcodes.com",
			color: "from-blue-400 to-cyan-500",
		},
		{
			icon: Phone,
			label: "Phone",
			value: "+1 (555) 123-4567",
			href: "tel:+15551234567",
			color: "from-green-400 to-emerald-500",
		},
		{
			icon: MapPin,
			label: "Location",
			value: "Available Worldwide",
			href: "#",
			color: "from-purple-400 to-violet-500",
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
			href: "mailto:omar@omarhosamcodes.com",
			color: "hover:text-red-400",
		},
	];

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 2000));

		// Reset form
		setFormData({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
		setIsSubmitting(false);

		// You would typically send this data to your backend here
		alert("Thank you for your message! I'll get back to you soon.");
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
					<form onSubmit={handleSubmit} className="space-y-6">
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
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									required
									className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
									placeholder="Your name"
								/>
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
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									required
									className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
									placeholder="your@email.com"
								/>
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
								name="subject"
								value={formData.subject}
								onChange={handleInputChange}
								required
								className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
								placeholder="Project inquiry, collaboration, etc."
							/>
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
								name="message"
								value={formData.message}
								onChange={handleInputChange}
								required
								rows={6}
								className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
								placeholder="Tell me about your project or what you'd like to discuss..."
							/>
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
