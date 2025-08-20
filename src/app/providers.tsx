"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { Next13ProgressBar } from "next13-progressbar";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { queryClient } from "../lib/react-query";

("");

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</ThemeProvider>

			<Next13ProgressBar
				height="4px"
				enableSystem={true}
				color="#FFFFFF"
				showOnShallow
				options={{ showSpinner: false }}
			/>

			<SpeedInsights />

			<Analytics />

			<Toaster richColors />
		</>
	);
}
