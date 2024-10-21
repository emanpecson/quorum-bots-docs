import ContentSection from "@/components/content/content-section";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { ContentHeaderType } from "@/types/content-header";

export default function GettingStartedPage() {
	const headers: ContentHeaderType[] = [
		{ id: "header1", label: "Installing Quorum Studio", subheaders: [] },
	];

	return (
		<NavWrapper
			title="Getting Started"
			description="A quick tutorial for starting a project in Quorum Studio"
			headers={headers}
		>
			<ContentSection header={headers[0]}>temp</ContentSection>
		</NavWrapper>
	);
}
