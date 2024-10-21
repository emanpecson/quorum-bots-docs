"use client";

import ContentText from "@/components/content/content-text";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { ContentHeaderType } from "@/types/content-header";
import { useRef } from "react";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Content from "@/components/content/content";
import UnderDevelopment from "@/components/placeholder/under-development";

export default function MotivationPage() {
	const header1Ref = useRef<HTMLDivElement | null>(null);
	const subheader1Ref = useRef<HTMLDivElement | null>(null);
	const subheader2Ref = useRef<HTMLDivElement | null>(null);
	const header2Ref = useRef<HTMLDivElement | null>(null);
	const header3Ref = useRef<HTMLDivElement | null>(null);

	const headers: ContentHeaderType[] = [
		{
			id: "0",
			label: "Header 1",
			ref: header1Ref,
			subheaders: [
				{ id: "1", label: "Subheading 1", ref: subheader1Ref },
				{ id: "2", label: "Subheading 2", ref: subheader2Ref },
			],
		},
		{ id: "3", label: "Header 2", ref: header2Ref, subheaders: [] },
		{ id: "4", label: "Header 3", ref: header3Ref, subheaders: [] },
	];

	return (
		<NavWrapper
			title="Motivation"
			description="A step towards making engineering more accessible"
			headers={headers}
		>
			<Content>
				<UnderDevelopment />

				<ContentSection header={headers[0]}>
					<ContentText>
						Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada imperdiet cras curae
						condimentum nunc nec ad cubilia. Finibus magna tempor euismod cras aenean cursus. Est
						ridiculus non hac ex faucibus, dui laoreet netus. Lectus varius consectetur fames
						tincidunt fames duis. Nibh amet mattis feugiat sem porttitor mattis. Sollicitudin
						blandit a urna elit viverra nam. Placerat semper id congue pharetra etiam adipiscing
						eget facilisi. Iaculis phasellus et dolor habitant arcu rutrum lectus. Lorem ipsum odor
						amet, consectetuer adipiscing elit. Malesuada imperdiet cras curae condimentum nunc nec
						ad cubilia. Finibus magna tempor euismod cras aenean cursus. Est ridiculus non hac ex
						faucibus, dui laoreet netus. Lectus varius consectetur fames tincidunt fames duis. Nibh
						amet mattis feugiat sem porttitor mattis. Sollicitudin blandit a urna elit viverra nam.
						Placerat semper id congue pharetra etiam adipiscing eget facilisi. Iaculis phasellus et
						dolor habitant arcu rutrum lectus. Lorem ipsum odor amet, consectetuer adipiscing elit.
						Malesuada imperdiet cras curae condimentum nunc nec ad cubilia. Finibus magna tempor
						euismod cras aenean cursus. Est ridiculus non hac ex faucibus, dui laoreet netus. Lectus
						varius consectetur fames tincidunt fames duis. Nibh amet mattis feugiat sem porttitor
						mattis. Sollicitudin blandit a urna elit viverra nam. Placerat semper id congue pharetra
						etiam adipiscing eget facilisi. Iaculis phasellus et dolor habitant arcu rutrum lectus.
					</ContentText>
					<ContentSubsection subheader={headers[0].subheaders[0]}>
						<ContentText>
							Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada imperdiet cras curae
							condimentum nunc nec ad cubilia. Finibus magna tempor euismod cras aenean cursus. Est
							ridiculus non hac ex faucibus, dui laoreet netus. Lectus varius consectetur fames
							tincidunt fames duis. Nibh amet mattis feugiat sem porttitor mattis. Sollicitudin
							blandit a urna elit viverra nam. Placerat semper id congue pharetra etiam adipiscing
						</ContentText>
					</ContentSubsection>
					<ContentSubsection subheader={headers[0].subheaders[1]}>
						<ContentText>
							Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada imperdiet cras curae
							condimentum nunc nec ad cubilia. Finibus magna tempor euismod cras aenean cursus. Est
							ridiculus non hac ex faucibus, dui laoreet netus. Lectus varius consectetur fames
							tincidunt fames duis. Nibh amet mattis feugiat sem porttitor mattis. Sollicitudin
							blandit a urna elit viverra nam. Placerat semper id congue pharetra etiam adipiscing
						</ContentText>
					</ContentSubsection>
				</ContentSection>
				<ContentSection header={headers[1]}>
					<ContentText>
						Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada imperdiet cras curae
						condimentum nunc nec ad cubilia. Finibus magna tempor euismod cras aenean cursus. Est
						ridiculus non hac ex faucibus, dui laoreet netus. Lectus varius consectetur fames
						tincidunt fames duis. Nibh amet mattis feugiat sem porttitor mattis. Sollicitudin
						blandit a urna elit viverra nam. Placerat semper id congue pharetra etiam adipiscing
					</ContentText>
				</ContentSection>
				<ContentSection header={headers[2]}>
					<ContentText>
						Lorem ipsum odor amet, consectetuer adipiscing elit. Malesuada imperdiet cras curae
						condimentum nunc nec ad cubilia. Finibus magna tempor euismod cras aenean cursus. Est
						ridiculus non hac ex faucibus, dui laoreet netus. Lectus varius consectetur fames
						tincidunt fames duis. Nibh amet mattis feugiat sem porttitor mattis. Sollicitudin
						blandit a urna elit viverra nam. Placerat semper id congue pharetra etiam adipiscing
					</ContentText>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
