import Header from "@/components/layout/header";
import Navigation from "@/components/layout/navigation/navigation";

export default function DocumentationLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <Navigation>{children}</Navigation>;
}
