"use client";

import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { buttonPressDurationEx, isLeftPressedEx, isRightPressedEx } from "@/data/libraries/button";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function ButtonPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"constants",

		"IsLeftPressed",
		"IsLeftPressedRet",
		"IsLeftPressedParams",
		"IsLeftPressedEx",

		"IsRightPressed",
		"IsRightPressedRet",
		"IsRightPressedParams",
		"IsRightPressedEx",

		"ButtonPressDuration",
		"ButtonPressDurationRet",
		"ButtonPressDurationParams",
		"ButtonPressDurationEx",
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
			label: "IsLeftPressed()",
			ref: refMap.IsLeftPressed,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.IsLeftPressedRet },
				{ id: "3", label: "Parameters", ref: refMap.IsLeftPressedParams },
				{ id: "4", label: "Example", ref: refMap.IsLeftPressedEx },
			],
		},
		{
			id: "5",
			label: "IsRightPressed()",
			ref: refMap.IsRightPressed,
			subheaders: [
				{ id: "6", label: "Returns", ref: refMap.IsRightPressedRet },
				{ id: "7", label: "Parameters", ref: refMap.IsRightPressedParams },
				{ id: "8", label: "Example", ref: refMap.IsRightPressedEx },
			],
		},
		{
			id: "9",
			label: "ButtonPressDuration(integer btn)",
			ref: refMap.ButtonPressDuration,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.ButtonPressDurationRet },
				{ id: "11", label: "Parameters", ref: refMap.ButtonPressDurationParams },
				{ id: "12", label: "Example", ref: refMap.ButtonPressDurationEx },
			],
		},
	];

	return (
		<NavWrapper
			headers={headers}
			title="Button"
			description="The button library allows for detection of button presses from the left and
    right arrow keys located on the top face of the hub."
		>
			<Content>
				{/* section: constants */}
				<ContentSection header={headers[0]}>
					<Constants
						constants={[
							{ type: "integer", identifier: "LEFT", value: "0" },
							{ type: "integer", identifier: "RIGHT", value: "1" },
						]}
					/>
				</ContentSection>

				{/* section: IsLeftPressed() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type="boolean">
							Returns true if left arrow is pressed, false if not
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
						<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={isLeftPressedEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: IsRightPressed() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type="boolean">
							Returns true if right arrow is pressed, false if not
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
						<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={isRightPressedEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: ButtonPressDuration() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type="integer">
							Returns duration, the amount of time in milliseconds the provided button has been held
							down for.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
						<MethodParams
							params={[
								{ type: "integer", identifier: "btn", description: "The button to be checked" },
							]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={buttonPressDurationEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
