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
					<div className="h-screen w-screen">
						<Header />
						<div className="w-full flex justify-center">
							<div className="w-full max-w-[86rem]">{children}</div>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
