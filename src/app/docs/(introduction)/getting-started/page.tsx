"use client";

import Content from "@/components/content/content";
import ContentSection from "@/components/content/content-section";
import NavWrapper from "@/components/navigation/nav-wrapper";
import UnderDevelopment from "@/components/placeholder/under-development";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function GettingStartedPage() {
	const refMap = useRefMap(["install"]);

	const headers: ContentHeaderType[] = [
		{ id: "0", label: "Installing Quorum Studio", ref: refMap.install, subheaders: [] },
	];

	return (
		<NavWrapper
			title="Getting Started"
			description="A quick tutorial for starting a project in Quorum Studio"
			headers={headers}
		>
			<Content>
				<ContentSection header={headers[0]}>
					<UnderDevelopment />
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
