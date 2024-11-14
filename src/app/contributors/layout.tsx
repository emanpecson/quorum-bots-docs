export default function ContributorsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="w-full pt-16 max-w-[86rem] mx-auto">{children}</div>;
}
