import { MessageList } from "@/components/admin/MessageList";
import { getMessages } from "@/services/message-service";

export const dynamic = "force-dynamic";

export default async function InboxPage() {
	const { messages } = await getMessages(
		{
			// We can add filters here later if needed
		},
		{
			page: 1,
			limit: 50, // Fetch more for admin view
		},
	);

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h1 className="font-bold text-2xl text-gray-900 dark:text-white">
					Inbox
				</h1>
			</div>
			<MessageList messages={messages} />
		</div>
	);
}
