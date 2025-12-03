import { updateMessageStatus } from "@/services/message-service";
import type { MessageStatus } from "@/types/message";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";

const updateStatusSchema = z.object({
	status: z.enum(["UNREAD", "READ", "REPLIED", "ARCHIVED"]),
});

export async function PATCH(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> },
) {
	try {
		const body = await request.json();
		const { id } = await params;

		// Validate the request data
		const validationResult = updateStatusSchema.safeParse(body);

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

		// Update message status
		const message = await updateMessageStatus(
			id,
			validationResult.data.status as MessageStatus,
		);

		return NextResponse.json({
			success: true,
			message: "Message status updated successfully",
			data: message,
		});
	} catch (error) {
		console.error("Error updating message status:", error);

		return NextResponse.json(
			{
				success: false,
				message: "Internal server error",
			},
			{ status: 500 },
		);
	}
}
