"use client";

import {
	deleteMessageAction,
	updateMessageStatusAction,
} from "@/actions/message-actions";
import { Button } from "@/components/ui/button";
import type { Message } from "@/types/message";
import { Archive, CheckCircle, Eye, Trash2 } from "lucide-react";
import { useState } from "react";

interface MessageListProps {
	messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
	const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

	return (
		<div className="space-y-6">
			<div className="overflow-hidden bg-white shadow sm:rounded-md dark:bg-gray-800">
				<ul className="divide-y divide-gray-200 dark:divide-gray-700">
					{messages.length === 0 ? (
						<li className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
							No messages found
						</li>
					) : (
						messages.map((message) => (
							<li key={message.id}>
								<div className="px-4 py-4 transition duration-150 ease-in-out hover:bg-gray-50 sm:px-6 dark:hover:bg-gray-700">
									<div className="flex items-center justify-between">
										<div className="flex flex-col truncate">
											<div className="flex items-center">
												<p className="truncate font-medium text-indigo-600 text-sm dark:text-indigo-400">
													{message.name}
												</p>
												<p className="ml-2 truncate text-gray-500 text-xs dark:text-gray-400">
													{message.email}
												</p>
											</div>
											<p className="mt-1 truncate font-semibold text-gray-900 text-sm dark:text-white">
												{message.subject}
											</p>
										</div>
										<div className="ml-2 flex flex-shrink-0">
											<p
												className={`inline-flex rounded-full px-2 font-semibold text-xs leading-5 ${
													message.status === "UNREAD"
														? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
														: message.status === "ARCHIVED"
															? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
															: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
												}`}
											>
												{message.status}
											</p>
										</div>
									</div>
									<div className="mt-2 sm:flex sm:justify-between">
										<div className="sm:flex">
											<p className="flex items-center text-gray-500 text-sm dark:text-gray-400">
												{new Date(message.createdAt).toLocaleDateString()}
											</p>
										</div>
										<div className="mt-2 flex items-center space-x-2 text-sm sm:mt-0">
											<Button
												size="sm"
												variant="outline"
												onClick={() => setSelectedMessage(message)}
											>
												<Eye className="mr-1 h-4 w-4" /> View
											</Button>
											{message.status !== "READ" &&
												message.status !== "REPLIED" && (
													<form
														action={async () => {
															await updateMessageStatusAction(
																message.id,
																"READ",
															);
														}}
													>
														<Button size="sm" variant="ghost" type="submit">
															<CheckCircle className="h-4 w-4 text-green-500" />
														</Button>
													</form>
												)}
											{message.status !== "ARCHIVED" && (
												<form
													action={async () => {
														await updateMessageStatusAction(
															message.id,
															"ARCHIVED",
														);
													}}
												>
													<Button size="sm" variant="ghost" type="submit">
														<Archive className="h-4 w-4 text-gray-500" />
													</Button>
												</form>
											)}
											<form
												action={async () => {
													if (
														confirm(
															"Are you sure you want to delete this message?",
														)
													) {
														await deleteMessageAction(message.id);
													}
												}}
											>
												<Button
													size="sm"
													variant="ghost"
													type="submit"
													className="text-red-600 hover:bg-red-50 hover:text-red-700"
												>
													<Trash2 className="h-4 w-4" />
												</Button>
											</form>
										</div>
									</div>
								</div>
							</li>
						))
					)}
				</ul>
			</div>

			{selectedMessage && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
					<div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-xl dark:bg-gray-800">
						<div className="p-6">
							<div className="mb-4 flex items-start justify-between">
								<h3 className="font-bold text-gray-900 text-xl dark:text-white">
									{selectedMessage.subject}
								</h3>
								<Button
									variant="ghost"
									size="sm"
									onClick={() => setSelectedMessage(null)}
								>
									✕
								</Button>
							</div>
							<div className="space-y-4">
								<div className="flex justify-between border-b pb-2 text-gray-500 text-sm dark:text-gray-400">
									<div>
										<span className="font-medium text-gray-900 dark:text-white">
											From:
										</span>{" "}
										{selectedMessage.name} &lt;{selectedMessage.email}&gt;
									</div>
									<div>
										{new Date(selectedMessage.createdAt).toLocaleString()}
									</div>
								</div>
								<div className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
									{selectedMessage.message}
								</div>
							</div>
							<div className="mt-6 flex justify-end space-x-3 border-t pt-4">
								<Button
									variant="outline"
									onClick={() => setSelectedMessage(null)}
								>
									Close
								</Button>
								<a
									href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
									className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
								>
									Reply via Email
								</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
