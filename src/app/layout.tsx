import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "@/globals.css";
import Header from "@/components/layout/header";

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
					<div className="min-h-screen w-screen overflow-x-hidden">
						<Header />
						<div className="w-full flex justify-center">
							<div className="w-full">{children}</div>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
