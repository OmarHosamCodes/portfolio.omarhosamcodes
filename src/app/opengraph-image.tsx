import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Omar Hosam - Full-Stack Developer";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#000",
					backgroundImage: "linear-gradient(45deg, #7c3aed, #ec4899, #3b82f6)",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "rgba(0, 0, 0, 0.8)",
						padding: "60px",
						borderRadius: "20px",
						border: "2px solid rgba(255, 255, 255, 0.2)",
					}}
				>
					<div
						style={{
							fontSize: 72,
							fontWeight: "bold",
							background: "linear-gradient(45deg, #a855f7, #ec4899, #3b82f6)",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							color: "transparent",
							marginBottom: "20px",
						}}
					>
						Omar Hosam
					</div>
					<div
						style={{
							fontSize: 32,
							color: "#fff",
							fontWeight: "600",
							marginBottom: "10px",
						}}
					>
						Full-Stack Developer & Tech Enthusiast
					</div>
					<div
						style={{
							fontSize: 20,
							color: "#d1d5db",
							textAlign: "center",
							maxWidth: "600px",
						}}
					>
						Building robust and scalable web applications, CLI tools, and digital solutions
					</div>
				</div>
			</div>
		),
		{
			...size,
		},
	);
}
