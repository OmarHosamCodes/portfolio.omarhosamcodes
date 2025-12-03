import { z } from "zod";

// Prisma model types
export type Message = {
	id: string;
	name: string;
	email: string;
	subject: string;
	message: string;
	status: MessageStatus;
	createdAt: Date;
	updatedAt: Date;
};

export type MessageStatus = "UNREAD" | "READ" | "REPLIED" | "ARCHIVED";

// Form validation schema
export const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.min(2, "Name must be at least 2 characters")
		.max(100, "Name must be less than 100 characters"),
	email: z
		.string()
		.min(1, "Email is required")
		.email("Please enter a valid email")
		.max(255, "Email must be less than 255 characters"),
	subject: z
		.string()
		.min(1, "Subject is required")
		.min(5, "Subject must be at least 5 characters")
		.max(200, "Subject must be less than 200 characters"),
	message: z
		.string()
		.min(1, "Message is required")
		.min(10, "Message must be at least 10 characters")
		.max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// API request/response types
export type CreateMessageRequest = ContactFormData;

export type CreateMessageResponse = {
	success: boolean;
	message?: string;
	data?: {
		id: string;
	};
};

// Admin types for managing messages
export type MessageWithCounts = Message & {
	_count?: {
		replies?: number;
	};
};

export type MessagesFilter = {
	status?: MessageStatus;
	search?: string;
	dateFrom?: Date;
	dateTo?: Date;
};

export type MessagesPagination = {
	page: number;
	limit: number;
	total: number;
	totalPages: number;
};

export type MessagesResponse = {
	messages: Message[];
	pagination: MessagesPagination;
};
