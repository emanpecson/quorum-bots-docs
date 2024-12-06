"use client";

import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { GetPortEx, SetPortEx, GetDistanceEx, GetPixelEx, SetPixelEx, ClearLightsEx, SetAllLightsEx, ShowEx  } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";


export default function DistanceSensorPage() {
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

		"GetDistance",
		"GetDistanceRet",
		"GetDistanceParams",
		"GetDistanceEx",

		"GetPixel",
		"GetPixelRet",
		"GetPixelParams",
		"GetPixelEx",

		"SetPixel",
		"SetPixelRet",
		"SetPixelParams",
		"SetPixelEx",

		
		"ClearLights",
		"ClearLightsRet",
		"ClearLightsParams",
		"ClearLightsEx",

		"SetAllLights",
		"SetAllLightsRet",
		"SetAllLightsParams",
		"SetAllLightsEx",

		"Show",
		"ShowRet",
		"ShowParams",
		"ShowEx",
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
			label: "GetDistance()",
			ref: refMap.GetDistance,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.GetDistanceRet },
				{ id: "11", label: "Parameters", ref: refMap.GetDistanceParams },
				{ id: "12", label: "Example", ref: refMap.GetDistanceEx },
			],
		},
		{
			id: "13",
			label: "GetPixel(integer x, integer y)",
			ref: refMap.GetPixel,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.GetPixelRet },
				{ id: "15", label: "Parameters", ref: refMap.GetPixelParams },
				{ id: "16", label: "Example", ref: refMap.GetPixelEx },
			],
		},
		{
			id: "17",
			label: "SetPixel(integer x, integer y, integer intensity)",
			ref: refMap.SetPixel,
			subheaders: [
				{ id: "18", label: "Returns", ref: refMap.SetPixelRet },
				{ id: "19", label: "Parameters", ref: refMap.SetPixelParams },
				{ id: "20", label: "Example", ref: refMap.SetPixelEx },
			],
		},
		{
			id: "21",
			label: "ClearLights()",
			ref: refMap.ClearLights,
			subheaders: [
				{ id: "22", label: "Returns", ref: refMap.ClearLightsRet },
				{ id: "23", label: "Parameters", ref: refMap.ClearLightsParams },
				{ id: "24", label: "Example", ref: refMap.ClearLightsEx },
			],
		},
		{
			id: "21",
			label: "SetAllLights(integer intensity)",
			ref: refMap.SetAllLights,
			subheaders: [
				{ id: "22", label: "Returns", ref: refMap.SetAllLightsRet },
				{ id: "23", label: "Parameters", ref: refMap.SetAllLightsParams },
				{ id: "24", label: "Example", ref: refMap.SetAllLightsEx },
			],
		},
		{
			id: "25",
			label: "Show(Array<integer> pixels)",
			ref: refMap.Show,
			subheaders: [
				{ id: "26", label: "Returns", ref: refMap.ShowRet },
				{ id: "27", label: "Parameters", ref: refMap.ShowParams },
				{ id: "28", label: "Example", ref: refMap.ShowEx },
			],
		},
	];

	return (
		<NavWrapper
			headers={headers}
			title="DistanceSensor"
			description="The distance sensor is an external device that is connected to the hub through a port.
    The distance sensor is capable of providing light via the front facing LEDs on the device,
    and can retrieve the distance in millimeters of a nearby object it is pointed towards."
		>
			<Content>
				{/* section: GetPort() */}
				<ContentSection header={headers[0]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[0].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the port number of the distance sensor
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
										"The port (A through F or 0 through 5) the distance sensor is attached to",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={SetPortEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetDistance() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the distance in millimeters from the distance
						sensor, returns -1 if the sensor cannot read a valid distance
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={GetDistanceEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetPixel() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the intensity, a value between 0 and 100, of a specific pixel on the distance sensor's
						light display
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "x",
									description:
										"The x coordinate from 0 to 1",
								},
								{
									type: "integer",
									identifier: "y",
									description:
										"The y coordinate from 0 to 1",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={GetPixelEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetPixel() */}
				<ContentSection header={headers[4]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[4].subheaders[0]}>
						<MethodReturns type={null}>
						Sets the intensity of a specific pixel on the distance sensor's
						light display
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[4].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "x",
									description:
										"The x coordinate from 0 to 1",
								},
								{
									type: "integer",
									identifier: "y",
									description:
										"The y coordinate from 0 to 1",
								},
								{
									type: "integer",
									identifier: "intensity",
									description:
										"The intensity of the provided pixel from 0 to 100",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[4].subheaders[2]}>
						<ContentCode code={SetPixelEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: ClearLights() */}
				<ContentSection header={headers[5]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[5].subheaders[0]}>
						<MethodReturns type={null}>
						Shuts off all lights on the distance sensor's light display
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[5].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[5].subheaders[2]}>
						<ContentCode code={ClearLightsEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetAllLights() */}
				<ContentSection header={headers[6]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[6].subheaders[0]}>
						<MethodReturns type={null}>
						Sets all lights on the display to the provided intensity
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[6].subheaders[1]}>
					<MethodParams params={[								
								{
									type: "integer",
									identifier: "intensity",
									description:
										"The intensity of the lights from 0 to 100",
								},
								]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[6].subheaders[2]}>
						<ContentCode code={SetAllLightsEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Show() */}
				<ContentSection header={headers[7]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[7].subheaders[0]}>
						<MethodReturns type={null}>
						Sets the light intensity of the display pixel by pixel based on the values
        				in a length 4 array of integers from 0 to 100
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[7].subheaders[1]}>
					<MethodParams params={[								
								{
									type: "Array<integer>",
									identifier: "pixels",
									description:
										"An Array<integer> of length 4 containing intensity values for each pixel",
								},
								]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[7].subheaders[2]}>
						<ContentCode code={ShowEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
