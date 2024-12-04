"use client";
import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { ColorEx } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function ColorPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"constants",
		"ColorEx"
	]);

	// define content headers
	const headers: ContentHeaderType[] = [
		{
			id: "0",
			label: "Constants",
			ref: refMap.constants,
			subheaders: [{ id: "1", label: "Example", ref: refMap.ColorEx }],
		}
	];

	return (
		<NavWrapper
			headers={headers}
			title="Color"
			description="The color class holds preset color values for use with the Spike, such as
    with the Light and ColorSensor libraries."
		>
			<Content>
				{/* section: constants */}
				<ContentSection header={headers[0]}>
					<Constants
						constants={[
							{ type: "integer", identifier: "BLACK", value: "0" },
							{ type: "integer", identifier: "MAGENTA", value: "1" },
							{ type: "integer", identifier: "PURPLE", value: "2" },
							{ type: "integer", identifier: "BLUE", value: "3" },
							{ type: "integer", identifier: "AZURE", value: "4" },
							{ type: "integer", identifier: "TURQUOISE", value: "5" },
							{ type: "integer", identifier: "GREEN", value: "6" },
							{ type: "integer", identifier: "YELLOW", value: "7" },
							{ type: "integer", identifier: "ORANGE", value: "8" },
							{ type: "integer", identifier: "RED", value: "9" },
							{ type: "integer", identifier: "WHITE", value: "10" },
							{ type: "integer", identifier: "UNKNOWN", value: "-1" },
						]}
					/>
					<ContentSubsection subheader={headers[0].subheaders[0]}>
						<ContentCode code={ColorEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}