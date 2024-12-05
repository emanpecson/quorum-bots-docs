"use client";

import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { GetPortEx, SetPortEx, ClearEx, GetPixelColorEx, SetPixelColorEx, ShowColorsEx } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function ColorMatrixPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"GetPort",
		"GetPortRet",
		"GetPortParams",
		"GetPortEx",
		
		"SetPort",
		"SetPortRet",
		"SetPortParams",
		"SetPortEx",

		"Clear",
		"ClearRet",
		"ClearParams",
		"ClearEx",

		"GetPixelColor",
		"GetPixelColorRet",
		"GetPixelColorParams",
		"GetPixelColorEx",

		"SetPixelColor",
		"SetPixelColorRet",
		"SetPixelColorParams",
		"SetPixelColorEx",

		"ShowColors",
		"ShowColorsRet",
		"ShowColorsParams",
		"ShowColorsEx",
	]);

	// define content headers
	const headers: ContentHeaderType[] = [
		{
			id: "1",
			label: "GetPort()",
			ref: refMap.GetPort,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.GetPortRet },
				{ id: "3", label: "Parameters", ref: refMap.GetPortParams },
				{ id: "4", label: "Example", ref: refMap.GetPortEx },
			],
		},
		{
			id: "5",
			label: "SetPort(integer port)",
			ref: refMap.SetPort,
			subheaders: [
				{ id: "6", label: "Returns", ref: refMap.SetPortRet },
				{ id: "7", label: "Parameters", ref: refMap.SetPortParams },
				{ id: "8", label: "Example", ref: refMap.SetPortEx },
			],
		},
		{
			id: "9",
			label: "Clear()",
			ref: refMap.Clear,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.ClearRet },
				{ id: "11", label: "Parameters", ref: refMap.ClearParams },
				{ id: "12", label: "Example", ref: refMap.ClearEx },
			],
		},
		{
			id: "13",
			label: "GetPixelColor(integer x, integer y)",
			ref: refMap.GetPixelColor,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.GetPixelColorRet },
				{ id: "15", label: "Parameters", ref: refMap.GetPixelColorParams },
				{ id: "16", label: "Example", ref: refMap.GetPixelColorEx },
			],
		},
		{
			id: "17",
			label: "SetPixelColor(integer x, integer y, integer color, integer intensity)",
			ref: refMap.SetPixelColor,
			subheaders: [
				{ id: "18", label: "Returns", ref: refMap.SetPixelColorRet },
				{ id: "19", label: "Parameters", ref: refMap.SetPixelColorParams },
				{ id: "20", label: "Example", ref: refMap.SetPixelColorEx },
			],
		},
		{
			id: "17",
			label: "ShowColors(Array<integer> colorValues, Array<integer> intensityValues)",
			ref: refMap.ShowColors,
			subheaders: [
				{ id: "18", label: "Returns", ref: refMap.ShowColorsRet },
				{ id: "19", label: "Parameters", ref: refMap.ShowColorsParams },
				{ id: "20", label: "Example", ref: refMap.ShowColorsEx },
			],
		},
	];

	return (
		<NavWrapper
			headers={headers}
			title="ColorMatrix"
			description="The color matrix is an external device that is connected to the hub through a port.
    The color matrix is a 3x3 matrix of lights where the color and brightness of each pixel can be changed
    to display things."
		>
			<Content>
				{/* section: GetPort() */}
				<ContentSection header={headers[0]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[0].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the currently assigned port for this color matrix
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[0].subheaders[1]}>
						<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[0].subheaders[2]}>
						<ContentCode code={GetPortEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetPort() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type={null}>
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
						<MethodParams params={[
								{
									type: "integer",
									identifier: "port",
									description:
										"The port (0 through 5) that this color matrix object will be set to",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={SetPortEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Clear() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type={null}>
						Clears all pixels on the color matrix
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
							<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={ClearEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetPixelColor() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type="Array<integer>">
						Returns an array of size 2 with the color and intensity of the pixel at the provided x and y location
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
						<MethodParams
							params={[
								{ type: "integer", identifier: "x", description: "The x location of the pixel, 0 to 2" },
								{ type: "integer", identifier: "y", description: "The y location of the pixel, 0 to 2" },
							]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={GetPixelColorEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetPixelColor() */}
				<ContentSection header={headers[4]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[4].subheaders[0]}>
						<MethodReturns type={null}>
						Sets the color and intensity of the pixel at the provided x and y location
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[4].subheaders[1]}>
						<MethodParams
							params={[
								{ type: "integer", identifier: "x", description: "The x location of the pixel, 0 to 2" },
								{ type: "integer", identifier: "y", description: "The y location of the pixel, 0 to 2" },
								{ type: "integer", identifier: "color", description: "The color constant to set the pixel to (see Color)" },
								{ type: "integer", identifier: "intensity", description: "The intensity (brightness) to set the pixel to" },
							]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[4].subheaders[2]}>
						<ContentCode code={SetPixelColorEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: ShowColors() */}
				<ContentSection header={headers[5]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[5].subheaders[0]}>
						<MethodReturns type={null}>
						Changes the color and intensity (brightness) of all pixels from the provided color and intensity arrays
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[5].subheaders[1]}>
						<MethodParams
							params={[
								{ type: "Array<integer>", identifier: "colorValues", description: "An integer array of size 9 containing the color for each pixel" },
								{ type: "Array<integer>", identifier: "intensityValues", description: "An integer array of size 9 containing the intensity for each pixel" },
							]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[5].subheaders[2]}>
						<ContentCode code={ShowColorsEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}