import { getMessageStats, getMessages } from "@/services/message-service";
import type { MessageStatus, MessagesFilter } from "@/types/message";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);

		// Parse query parameters
		const page = Number.parseInt(searchParams.get("page") || "1", 10);
		const limit = Math.min(
			Number.parseInt(searchParams.get("limit") || "10", 10),
			50,
		); // Max 50 per page
		const status = searchParams.get("status") as MessageStatus | null;
		const search = searchParams.get("search") || undefined;

		// Build filter
		const filter: MessagesFilter = {};
		if (status && ["UNREAD", "READ", "REPLIED", "ARCHIVED"].includes(status)) {
			filter.status = status;
		}
		if (search) {
			filter.search = search;
		}

		// Get messages and stats
		const [messagesResponse, stats] = await Promise.all([
			getMessages(filter, { page, limit }),
			getMessageStats(),
		]);

		return NextResponse.json({
			success: true,
			data: {
				...messagesResponse,
				stats,
			},
		});
	} catch (error) {
		console.error("Error fetching messages:", error);

		return NextResponse.json(
			{
				success: false,
				message: "Internal server error",
			},
			{ status: 500 },
		);
	}
}
