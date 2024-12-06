"use client";

import ContentText from "@/components/content/content-text";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { ContentHeaderType } from "@/types/content-header";
import ContentSection from "@/components/content/content-section";
import Content from "@/components/content/content";
import { useRefMap } from "@/hooks/useRefMap";

export default function MotivationPage() {
	const refMap = useRefMap(["inclusivity", "breakingBarriers"]);

	const headers: ContentHeaderType[] = [
		{
			id: "0",
			label: "Inclusivity",
			ref: refMap.inclusivity,
			subheaders: [],
		},
		{
			id: "1",
			label: "Breaking Barriers",
			ref: refMap.breakingBarriers,
			subheaders: [],
		},
	];

	return (
		<NavWrapper
			title="Motivation"
			description="A step towards making engineering more accessible"
			headers={headers}
		>
			<Content>
				<ContentSection header={headers[0]}>
					<ContentText>
						The inspiration for this project stems from a deep commitment to inclusivity and the
						belief that everyone, regardless of ability, should have equal access to education and
						opportunities in STEM. Technology, and programming in particular, is a powerful tool for
						creativity, problem-solving, and innovation, but for too long, these tools have been
						inaccessible to many individuals with disabilities.
					</ContentText>
				</ContentSection>
				<ContentSection header={headers[1]}>
					<ContentText>
						Our goal is to break down those barriers by combining the accessibility-first design of
						the Quorum programming language with the interactive, hands-on engagement of LEGO SPIKE
						robots. By doing so, we aim to empower children with disabilities to participate fully
						in learning activities that foster creativity, collaboration, and confidence.
					</ContentText>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
