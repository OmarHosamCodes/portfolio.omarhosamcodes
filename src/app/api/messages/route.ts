import { createMessage } from "@/services/message-service";
import { contactFormSchema } from "@/types/message";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		// Validate the request data
		const validationResult = contactFormSchema.safeParse(body);

		if (!validationResult.success) {
			return NextResponse.json(
				{
					success: false,
					message: "Validation failed",
					errors: validationResult.error.issues,
				},
				{ status: 400 },
			);
		}

		// Create the message
		const message = await createMessage(validationResult.data);

		return NextResponse.json(
			{
				success: true,
				message: "Message sent successfully",
				data: {
					id: message.id,
				},
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error("Error creating message:", error);

		return NextResponse.json(
			{
				success: false,
				message: "Internal server error",
			},
			{ status: 500 },
		);
	}
}
