"use client";

import Content from "@/components/content/content";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import ContentText from "@/components/content/content-text";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function OverviewPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"legoSpike",

		"quorumLang",
		"quorumLangEvidenceBased",
		"quorumLangFriendly",

		"quorumStudio",
	]);

	// define content headers
	const headers: ContentHeaderType[] = [
		{
			id: "0",
			label: "LEGO® SPIKE™",
			ref: refMap.legoSpike,
			subheaders: [],
		},
		{
			id: "1",
			label: "Quorum",
			ref: refMap.quorumLang,
			subheaders: [
				{
					id: "1a",
					label: "Evidence-based",
					ref: refMap.quorumLangEvidenceBased,
				},
				{
					id: "1b",
					label: "Friendly",
					ref: refMap.quorumLangFriendly,
				},
			],
		},
		{
			id: "2",
			label: "Quorum Studio",
			ref: refMap.quorumStudio,
			subheaders: [],
		},
	];

	return (
		<NavWrapper
			title="Overview"
			description="Quorum now supports programming for your LEGO® SPIKE™ robotics kit!"
			headers={headers}
		>
			<Content>
				{/* lego spike */}
				<ContentSection header={headers[0]}>
					<ContentText>
						LEGO® SPIKE™ is a robotics kit that introduces students to engineering and programming
						through hands-on activities. LEGO® SPIKE™ alone offers a fun experience for kids to
						engage with learning, but alongside Quorum, the fun becomes accessible to individuals
						with disabilities!
					</ContentText>
				</ContentSection>

				{/* quorum language */}
				<ContentSection header={headers[1]}>
					<ContentText>
						Quorum is a programming language that emphasizes accessibility and simplicity, ensuring
						that users with disabilities can effectively learn how to program.
					</ContentText>
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<ContentText>
							Quorum is the {"world's"} first evidence-based programming language, carefully
							designed through extensive research to enhance accessibility and usability for
							individuals with disabilities.
						</ContentText>
					</ContentSubsection>
					<ContentSubsection subheader={headers[1].subheaders[1]}>
						<ContentText>
							Quorum is well-suited for kids, as it is designed with simplicity in mind.
						</ContentText>
						<ContentText>
							Quorum avoids overly complex syntax that can be intimidating for beginners. Instead,
							code can be written to be plain and readable so that kids can focus on learning
							concepts rather than struggling with complicated code.
						</ContentText>
					</ContentSubsection>
				</ContentSection>

				{/* quorum studio */}
				<ContentSection header={headers[2]}>
					<ContentText>
						Quorum code can be ran using Quorum Studio, the integrated development environment
						(IDE). Through Quorum Studio, users will have full access to a range of accessibility
						features, including screen-reader and keyboard navigation support.
					</ContentText>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
