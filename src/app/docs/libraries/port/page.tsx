"use client";
import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { PortEx } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function PortPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"constants",
		"PortEx"
	]);

	// define content headers
	const headers: ContentHeaderType[] = [
		{
			id: "0",
			label: "Constants",
			ref: refMap.constants,
			subheaders: [{ id: "1", label: "Example", ref: refMap.PortEx }],
		}
	];

	return (
		<NavWrapper
			headers={headers}
			title="Port"
			description="A Port represents one of the six ports on the hub, labeled A-F. 
        The labels A-F correspond to integers 0-5 respectively."
		>
			<Content>
				{/* section: constants */}
				<ContentSection header={headers[0]}>
					<Constants
						constants={[
							{ type: "integer", identifier: "A", value: "0" },
							{ type: "integer", identifier: "B", value: "1" },
							{ type: "integer", identifier: "C", value: "2" },
							{ type: "integer", identifier: "D", value: "3" },
							{ type: "integer", identifier: "E", value: "4" },
							{ type: "integer", identifier: "F", value: "5" },
						]}
					/>
					<ContentSubsection subheader={headers[0].subheaders[0]}>
						<ContentCode code={PortEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}