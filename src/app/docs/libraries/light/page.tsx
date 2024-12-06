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

export default function LightPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"constants",

		"Color",
		"ColorRet",
		"ColorParams",
		"ColorEx",
	]);

	// define content headers
	const headers: ContentHeaderType[] = [
		{
			id: "0",
			label: "Constants",
			ref: refMap.constants,
			subheaders: [],
		},
		{
			id: "1",
			label: "Color(integer light, integer color)",
			ref: refMap.Color,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.ColorRet },
				{ id: "3", label: "Parameters", ref: refMap.ColorParams },
				{ id: "4", label: "Example", ref: refMap.ColorEx },
			],
		},
	]

	return (
		<NavWrapper
			headers={headers}
			title="Light"
			description="The light class is used to change the color of the
    light of the Bluetooth connection button and the
    central hub button (the power button)."
		>
			<Content>
				{/* section: constants */}
				<ContentSection header={headers[0]}>
					<Constants
						constants={[
							{ type: "integer", identifier: "POWER", value: "0" },
							{ type: "integer", identifier: "CONNECT", value: "1" },
						]}
					/>
				</ContentSection>


				{/* section: Hide() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type={null}>
						Sets the color of the provided button.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "light",
									description:
										"Which light to change the color of (POWER or CONNECT)",
								},
								{
									type: "integer",
									identifier: "color",
									description:
										"The color to change the light to (from the Spike Color class)",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={ColorEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}

