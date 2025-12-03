"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				this.props.fallback || (
					<div className="flex min-h-[400px] items-center justify-center">
						<div className="text-center">
							<h2 className="mb-4 font-bold text-2xl text-white">
								Something went wrong
							</h2>
							<p className="text-gray-400">
								Please refresh the page or try again later.
							</p>
						</div>
					</div>
				)
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
