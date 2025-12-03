"use server";

import * as messageService from "@/services/message-service";
import type { MessageStatus } from "@/types/message";
import { revalidatePath } from "next/cache";

export async function updateMessageStatusAction(
	id: string,
	status: MessageStatus,
) {
	await messageService.updateMessageStatus(id, status);
	revalidatePath("/admin/inbox");
}

export async function deleteMessageAction(id: string) {
	await messageService.deleteMessage(id);
	revalidatePath("/admin/inbox");
}
