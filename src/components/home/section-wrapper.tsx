export default function SectionWrapper({ children }: { children: React.ReactNode }) {
	return <div className="max-w-[86rem] mx-auto px-4 sm:px-8 lg:pt-12 pt-6">{children}</div>;
}
