"use client";

import { motion } from "framer-motion";

interface LoadingProps {
	message?: string;
}

const Loading = ({ message = "Loading..." }: LoadingProps) => {
	return (
		<div className="flex min-h-[400px] items-center justify-center">
			<div className="text-center">
				<motion.div
					className="mx-auto mb-4 h-12 w-12 rounded-full border-4 border-gray-600 border-t-purple-500"
					animate={{ rotate: 360 }}
					transition={{
						duration: 1,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				/>
				<p className="text-gray-400">{message}</p>
			</div>
		</div>
	);
};

export default Loading;
