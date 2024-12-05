"use client";
import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { GetPortEx, SetPortEx, GetColorIntegerEx, GetReflectionEx, GetRGBIEx } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";


export default function ColorSensorPage() {
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

		"GetColorInteger",
		"GetColorIntegerRet",
		"GetColorIntegerParams",
		"GetColorIntegerEx",

		"GetReflection",
		"GetReflectionRet",
		"GetReflectionParams",
		"GetReflectionEx",

		"GetRGBI",
		"GetRGBIRet",
		"GetRGBIParams",
		"GetRGBIEx",
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
			label: "GetColorInteger()",
			ref: refMap.GetColorInteger,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.GetColorIntegerRet },
				{ id: "11", label: "Parameters", ref: refMap.GetColorIntegerParams },
				{ id: "12", label: "Example", ref: refMap.GetColorIntegerEx },
			],
		},
		{
			id: "13",
			label: "GetReflection()",
			ref: refMap.GetReflection,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.GetReflectionRet },
				{ id: "15", label: "Parameters", ref: refMap.GetReflectionParams },
				{ id: "16", label: "Example", ref: refMap.GetReflectionEx },
			],
		},
		{
			id: "17",
			label: "GetRGBI()",
			ref: refMap.GetRGBI,
			subheaders: [
				{ id: "18", label: "Returns", ref: refMap.GetRGBIRet },
				{ id: "19", label: "Parameters", ref: refMap.GetRGBIParams },
				{ id: "20", label: "Example", ref: refMap.GetRGBIEx },
			],
		}
	];

	return (
		<NavWrapper
			headers={headers}
			title="ColorSensor"
			description="The color sensor is an external device that is connected to the hub through a port.
    The color sensor is a unidirectional sensor that measures the intensity and rgb value of 
    reflected light."
		>
			<Content>
				{/* section: GetPort() */}
				<ContentSection header={headers[0]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[0].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the currently assigned port for this color sensor
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
										"The port that this color sensor object will be set to",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={SetPortEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetColorInteger() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the color, which is an integer corresponding to a color from the Color module
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
							<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={GetColorIntegerEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetReflection() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the intensity of reflected light detected by the color sensor from 0 to 100
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
						<MethodParams
							params={[]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={GetReflectionEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetRGBI() */}
				<ContentSection header={headers[4]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[4].subheaders[0]}>
						<MethodReturns type="Array<integer>">
						Returns an Array of integers of length 4, red (from 0 to 255) is at index 0, 
        blue (from 0 to 255) is at index 1, green (from 0 to 255) is at index 2, and the intensity 
        (from 0 to 100) is at index 3
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[4].subheaders[1]}>
						<MethodParams
							params={[]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[4].subheaders[2]}>
						<ContentCode code={GetRGBIEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}