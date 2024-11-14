export default function DocsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="w-full mx-auto max-w-[90rem]">{children}</div>;
}
