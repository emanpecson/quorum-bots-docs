import NavWrapper from "@/components/navigation/nav-wrapper";
import { ContentHeaderType } from "@/types/content-header";

export default function MotivationPage() {
	const headers: ContentHeaderType[] = [
		{ id: "header1", label: "Header 1" },
		{ id: "header2", label: "Header 2" },
	];

	return (
		<NavWrapper title="Motivation" headers={headers}>
			motivation
		</NavWrapper>
	);
}
