import { prisma } from "@/lib/prisma";
import type {
	CreateMessageRequest,
	Message,
	MessageStatus,
	MessagesFilter,
	MessagesPagination,
	MessagesResponse,
} from "@/types/message";
import type { Prisma } from "../../generated/prisma";

/**
 * Create a new message
 */
export async function createMessage(
	data: CreateMessageRequest,
): Promise<Message> {
	try {
		const message = await prisma.message.create({
			data: {
				name: data.name.trim(),
				email: data.email.toLowerCase().trim(),
				subject: data.subject.trim(),
				message: data.message.trim(),
			},
		});

		return message;
	} catch (error) {
		console.error("Error creating message:", error);
		throw new Error("Failed to create message");
	}
}

/**
 * Get a message by ID
 */
export async function getMessageById(id: string): Promise<Message | null> {
	try {
		const message = await prisma.message.findUnique({
			where: { id },
		});

		return message;
	} catch (error) {
		console.error("Error fetching message:", error);
		throw new Error("Failed to fetch message");
	}
}

/**
 * Get messages with filtering and pagination
 */
export async function getMessages(
	filter: MessagesFilter = {},
	pagination: { page: number; limit: number } = { page: 1, limit: 10 },
): Promise<MessagesResponse> {
	try {
		const { status, search, dateFrom, dateTo } = filter;
		const { page, limit } = pagination;

		// Build where clause
		const where: Prisma.MessageWhereInput = {};

		if (status) {
			where.status = status;
		}

		if (search) {
			where.OR = [
				{ name: { contains: search, mode: "insensitive" } },
				{ email: { contains: search, mode: "insensitive" } },
				{ subject: { contains: search, mode: "insensitive" } },
				{ message: { contains: search, mode: "insensitive" } },
			];
		}

		if (dateFrom || dateTo) {
			where.createdAt = {};
			if (dateFrom) where.createdAt.gte = dateFrom;
			if (dateTo) where.createdAt.lte = dateTo;
		}

		// Get total count
		const total = await prisma.message.count({ where });

		// Get messages
		const messages = await prisma.message.findMany({
			where,
			orderBy: { createdAt: "desc" },
			skip: (page - 1) * limit,
			take: limit,
		});

		const totalPages = Math.ceil(total / limit);

		return {
			messages,
			pagination: {
				page,
				limit,
				total,
				totalPages,
			},
		};
	} catch (error) {
		console.error("Error fetching messages:", error);
		throw new Error("Failed to fetch messages");
	}
}

/**
 * Update message status
 */
export async function updateMessageStatus(
	id: string,
	status: MessageStatus,
): Promise<Message> {
	try {
		const message = await prisma.message.update({
			where: { id },
			data: { status },
		});

		return message;
	} catch (error) {
		console.error("Error updating message status:", error);
		throw new Error("Failed to update message status");
	}
}

/**
 * Mark message as read
 */
export async function markAsRead(id: string): Promise<Message> {
	return updateMessageStatus(id, "READ");
}

/**
 * Mark message as replied
 */
export async function markAsReplied(id: string): Promise<Message> {
	return updateMessageStatus(id, "REPLIED");
}

/**
 * Archive message
 */
export async function archiveMessage(id: string): Promise<Message> {
	return updateMessageStatus(id, "ARCHIVED");
}

/**
 * Delete a message
 */
export async function deleteMessage(id: string): Promise<void> {
	try {
		await prisma.message.delete({
			where: { id },
		});
	} catch (error) {
		console.error("Error deleting message:", error);
		throw new Error("Failed to delete message");
	}
}

/**
 * Get message statistics
 */
export async function getMessageStats(): Promise<{
	total: number;
	unread: number;
	read: number;
	replied: number;
	archived: number;
}> {
	try {
		const [total, unread, read, replied, archived] = await Promise.all([
			prisma.message.count(),
			prisma.message.count({ where: { status: "UNREAD" } }),
			prisma.message.count({ where: { status: "READ" } }),
			prisma.message.count({ where: { status: "REPLIED" } }),
			prisma.message.count({ where: { status: "ARCHIVED" } }),
		]);

		return {
			total,
			unread,
			read,
			replied,
			archived,
		};
	} catch (error) {
		console.error("Error fetching message stats:", error);
		throw new Error("Failed to fetch message statistics");
	}
}
