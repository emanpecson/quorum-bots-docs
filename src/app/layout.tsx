import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "@/globals.css";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
	title: "Quorum LEGO Spike Library",
	description:
		"Documentation webpage for the LEGO Spike class for the Quorum language",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider attribute="class" defaultTheme="system">
					<Header />
					<div>{children}</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
