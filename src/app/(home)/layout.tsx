export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="pt-20 h-full px-10">{children}</div>;
}
