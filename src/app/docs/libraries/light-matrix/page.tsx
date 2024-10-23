"use client";

import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { WriteEx, GetPixelEx, SetPixelEx, GetOrientationEx, SetOrientationEx, 
		ClearEx, ShowEx, ShowImageEx,  } from "@/data/libraries/light-matrix";
import UnderDevelopment from "@/components/placeholder/under-development";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function MotorPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"constants",

		"Write",
		"WriteRet",
		"WriteParams",
		"WriteEx",

		"GetPixel",
		"GetPixelRet",
		"GetPixelParams",
		"GetPixelEx",

		"SetPixel",
		"SetPixelRet",
		"SetPixelParams",
		"SetPixelEx",

		"Show",
		"ShowRet",
		"ShowParams",
		"ShowEx",
		
		"ShowImage",
		"ShowImageRet",
		"ShowImageParams",
		"ShowImageEx",

		"Clear",
		"ClearRet",
		"ClearParams",
		"ClearEx",

		"SetOrientation",
		"SetOrientationRet",
		"SetOrientationParams",
		"SetOrientationEx",

		"GetOrientation",
		"GetOrientationRet",
		"GetOrientationParams",
		"GetOrientationEx",
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
			label: "Write(text value)",
			ref: refMap.Write,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.WriteRet },
				{ id: "3", label: "Parameters", ref: refMap.WriteParams },
				{ id: "4", label: "Example", ref: refMap.WriteEx },
			],
		},
		{
			id: "5",
			label: "GetPixel(integer x, integer y)",
			ref: refMap.GetPixel,
			subheaders: [
				{ id: "6", label: "Returns", ref: refMap.GetPixelRet },
				{ id: "7", label: "Parameters", ref: refMap.GetPixelParams },
				{ id: "8", label: "Example", ref: refMap.GetPixelEx },
			],
		},
		{
			id: "9",
			label: "SetPixel(integer x, integer y, integer intensity)",
			ref: refMap.SetPixel,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.SetPixelRet },
				{ id: "11", label: "Parameters", ref: refMap.SetPixelParams },
				{ id: "12", label: "Example", ref: refMap.SetPixelEx },
			],
		},
		{
			id: "13",
			label: "Show(Array<integer> pixels)",
			ref: refMap.Show,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.ShowRet },
				{ id: "15", label: "Parameters", ref: refMap.ShowParams },
				{ id: "16", label: "Example", ref: refMap.ShowEx },
			],
		},
		{
			id: "17",
			label: "ShowImage(integer image)",
			ref: refMap.ShowImage,
			subheaders: [
				{ id: "18", label: "Returns", ref: refMap.ShowImageRet },
				{ id: "19", label: "Parameters", ref: refMap.ShowImageParams },
				{ id: "20", label: "Example", ref: refMap.ShowImageEx },
			],
		},
		{
			id: "21",
			label: "Clear()",
			ref: refMap.Clear,
			subheaders: [
				{ id: "22", label: "Returns", ref: refMap.ClearRet },
				{ id: "23", label: "Parameters", ref: refMap.ClearParams },
				{ id: "24", label: "Example", ref: refMap.ClearEx },
			],
		},
		{
			id: "25",
			label: "GetOrientation()",
			ref: refMap.GetOrientation,
			subheaders: [
				{ id: "26", label: "Returns", ref: refMap.GetOrientationRet },
				{ id: "27", label: "Parameters", ref: refMap.GetOrientationParams },
				{ id: "28", label: "Example", ref: refMap.GetOrientationEx },
			],
		},
		{
			id: "29",
			label: "SetOrientation(integer orientation)",
			ref: refMap.SetOrientation,
			subheaders: [
				{ id: "30", label: "Returns", ref: refMap.SetOrientationRet },
				{ id: "31", label: "Parameters", ref: refMap.SetOrientationParams },
				{ id: "32", label: "Example", ref: refMap.SetOrientationEx },
			],
		},
	];

	return (
		<NavWrapper 
		title="LightMatrix" 
		description="The light matrix controls a 5x5 set of pixels on the Spike robot. The 
    first pixel in the top left is 0,0 and the bottom right pixel is 4,4. 
    You can get and set the pixels manually, clear the display, or write words to it."
		headers={headers}>
			<Content>
				{/* section: constants */}
				<ContentSection header={headers[0]}>
					<Constants
						constants={[
							{ type: "integer", identifier: "UP", value: "0" },
							{ type: "integer", identifier: "RIGHT", value: "1" },
							{ type: "integer", identifier: "DOWN", value: "2" },
							{ type: "integer", identifier: "LEFT", value: "3" },
							{ type: "integer", identifier: "HEART", value: "1" },
							{ type: "integer", identifier: "HEART_SMALL", value: "2" },
							{ type: "integer", identifier: "HAPPY", value: "3" },
							{ type: "integer", identifier: "SMILE", value: "4" },
							{ type: "integer", identifier: "SAD", value: "5" },
							{ type: "integer", identifier: "CONFUSED", value: "6" },
							{ type: "integer", identifier: "ANGRY", value: "7" },
							{ type: "integer", identifier: "ASLEEP", value: "8" },
							{ type: "integer", identifier: "SURPRISED", value: "9" },
							{ type: "integer", identifier: "SILLY", value: "10" },
							{ type: "integer", identifier: "FABULOUS", value: "11" },
							{ type: "integer", identifier: "MEH", value: "12" },
							{ type: "integer", identifier: "YES", value: "13" },
							{ type: "integer", identifier: "NO", value: "14" },
							{ type: "integer", identifier: "CLOCK12", value: "15" },
							{ type: "integer", identifier: "CLOCK1", value: "16" },
							{ type: "integer", identifier: "CLOCK2", value: "17" },
							{ type: "integer", identifier: "CLOCK3", value: "18" },
							{ type: "integer", identifier: "CLOCK4", value: "19" },
							{ type: "integer", identifier: "CLOCK5", value: "20" },
							{ type: "integer", identifier: "CLOCK6", value: "21" },
							{ type: "integer", identifier: "CLOCK7", value: "22" },
							{ type: "integer", identifier: "CLOCK8", value: "23" },
							{ type: "integer", identifier: "CLOCK9", value: "24" },
							{ type: "integer", identifier: "CLOCK10", value: "25" },
							{ type: "integer", identifier: "CLOCK11", value: "26" },
							{ type: "integer", identifier: "ARROW_N", value: "27" },
							{ type: "integer", identifier: "ARROW_NE", value: "28" },
							{ type: "integer", identifier: "ARROW_E", value: "29" },
							{ type: "integer", identifier: "ARROW_SE", value: "30" },
							{ type: "integer", identifier: "ARROW_S", value: "31" },
							{ type: "integer", identifier: "ARROW_SW", value: "32" },
							{ type: "integer", identifier: "ARROW_W", value: "33" },
							{ type: "integer", identifier: "ARROW_NW", value: "34" },
							{ type: "integer", identifier: "GO_RIGHT", value: "35" },
							{ type: "integer", identifier: "GO_LEFT", value: "36" },
							{ type: "integer", identifier: "GO_UP", value: "37" },
							{ type: "integer", identifier: "GO_DOWN", value: "38" },
							{ type: "integer", identifier: "TRIANGLE", value: "39" },
							{ type: "integer", identifier: "TRIANGLE_LEFT", value: "40" },
							{ type: "integer", identifier: "CHESSBOARD", value: "41" },
							{ type: "integer", identifier: "DIAMOND", value: "42" },
							{ type: "integer", identifier: "DIAMOND_SMALL", value: "43" },
							{ type: "integer", identifier: "SQUARE", value: "44" },
							{ type: "integer", identifier: "SQUARE_SMALL", value: "45" },
							{ type: "integer", identifier: "RABBIT", value: "46" },
							{ type: "integer", identifier: "COW", value: "47" },
							{ type: "integer", identifier: "MUSIC_CROTCHET", value: "48" },
							{ type: "integer", identifier: "MUSIC_QUAVER", value: "49" },
							{ type: "integer", identifier: "MUSIC_QUAVERS", value: "50" },
							{ type: "integer", identifier: "PITCHFORK", value: "51" },
							{ type: "integer", identifier: "XMAS", value: "52" },
							{ type: "integer", identifier: "PACMAN", value: "53" },
							{ type: "integer", identifier: "TARGET", value: "54" },
							{ type: "integer", identifier: "TSHIRT", value: "55" },
							{ type: "integer", identifier: "ROLLERSKATE", value: "56" },
							{ type: "integer", identifier: "DUCK", value: "57" },
							{ type: "integer", identifier: "HOUSE", value: "58" },
							{ type: "integer", identifier: "TORTOISE", value: "59" },
							{ type: "integer", identifier: "BUTTERFLY", value: "60" },
							{ type: "integer", identifier: "STICKFIGURE", value: "61" },
							{ type: "integer", identifier: "GHOST", value: "62" },
							{ type: "integer", identifier: "SWORD", value: "63" },
							{ type: "integer", identifier: "GIRAFFE", value: "64" },
							{ type: "integer", identifier: "SKULL", value: "65" },
							{ type: "integer", identifier: "UMBRELLA", value: "66" },
							{ type: "integer", identifier: "SNAKE", value: "67" },
						]} 
					/>
				</ContentSection>

				{/* section: Write() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type="">
							None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
						<MethodParams params={[
							{type: "text", identifier: "value", description: "Text that will be written to the display."}
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={WriteEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetPixel() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the intensity, between 0 and 100, of a particular pixel on the display. 
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
						<MethodParams params={[
								{ type: "integer", identifier: "x", description: "The x coordinate, from 0 to 4, of the pixel" },
								{ type: "integer", identifier: "y", description: "The y coordinate, from 0 to 4, of the pixel" },

							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={GetPixelEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetPixel() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type="">
						None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
						<MethodParams
							params={[
								{ type: "integer", identifier: "x", description: "The x coordinate, from 0 to 4, of the pixel" },
								{ type: "integer", identifier: "y", description: "The y coordinate, from 0 to 4, of the pixel" },
								{ type: "integer", identifier: "y", description: "The intensity, from 0 to 100, that the pixel will be set to" }
							]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={SetPixelEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Show() */}
				<ContentSection header={headers[4]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[4].subheaders[0]}>
						<MethodReturns type="">
						None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[4].subheaders[1]}>
					<MethodParams params={[
								{ type: "Array<integer>", identifier: "pixels", description: "An integer array of pixels to display, where each index represents the intensity from 0 to 100 of the corresponding pixel. The order is left to right, top to bottom on a 5x5 grid." },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[4].subheaders[2]}>
						<ContentCode code={ShowEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: ShowIMage() */}
				<ContentSection header={headers[5]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[5].subheaders[0]}>
						<MethodReturns type="">
						None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[5].subheaders[1]}>
						<MethodParams
							params={[
								{ type: "integer", identifier: "image", description: "Built in image to display; should be one of the constant values of LightMatrix" },
							]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[5].subheaders[2]}>
						<ContentCode code={ShowImageEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Clear() */}
				<ContentSection header={headers[6]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[6].subheaders[0]}>
						<MethodReturns type="">
						None: Sets the intensity of all pixels to 0
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[6].subheaders[1]}>
					<MethodParams params={[
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[6].subheaders[2]}>
						<ContentCode code={ClearEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetOrientation() */}
				<ContentSection header={headers[7]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[7].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the orientation of the light matrix, which is a value from 0 to 3  (UP, RIGHT, DOWN, LEFT)
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[7].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[7].subheaders[2]}>
						<ContentCode code={GetOrientationEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetOrientation() */}
				<ContentSection header={headers[8]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[8].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the orientation of the light matrix, which is a value from 0 to 3  (UP, RIGHT, DOWN, LEFT)
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[8].subheaders[1]}>
					<MethodParams params={[
								{ type: "integer", identifier: "orientation", description: "The direction to orient the light matrix, defined as a value from 0 to 3 (UP, RIGHT, DOWN, LEFT)." },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[8].subheaders[2]}>
						<ContentCode code={SetOrientationEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

			</Content>
		</NavWrapper>
	);
}

