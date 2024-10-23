"use client";

import Content from "@/components/content/content";
import NavWrapper from "@/components/navigation/nav-wrapper";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import { GetPortEx, SetPortEx, GetForceEx, GetForceRawEx, IsPressedEx } from "@/data/libraries/force-sensor";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function ForceSensorPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"constants",

		"GetPort",
		"GetPortRet",
		"GetPortParams",
		"GetPortEx",

		"SetPort",
		"SetPortRet",
		"SetPortParams",
		"SetPortEx",

		"GetForce",
		"GetForceRet",
		"GetForceParams",
		"GetForceEx",

		"GetForceRaw",
		"GetForceRawRet",
		"GetForceRawParams",
		"GetForceRawEx",

		
		"IsPressed",
		"IsPressedRet",
		"IsPressedParams",
		"IsPressedEx",
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
			label: "GetForce()",
			ref: refMap.GetForce,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.GetForceRet },
				{ id: "11", label: "Parameters", ref: refMap.GetForceParams },
				{ id: "12", label: "Example", ref: refMap.GetForceEx },
			],
		},
		{
			id: "13",
			label: "GetForceRaw()",
			ref: refMap.GetForceRaw,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.GetForceRawRet },
				{ id: "15", label: "Parameters", ref: refMap.GetForceRawParams },
				{ id: "16", label: "Example", ref: refMap.GetForceRawEx },
			],
		},
		{
			id: "17",
			label: "IsPressed()",
			ref: refMap.IsPressed,
			subheaders: [
				{ id: "18", label: "Returns", ref: refMap.IsPressedRet },
				{ id: "19", label: "Parameters", ref: refMap.IsPressedParams },
				{ id: "20", label: "Example", ref: refMap.IsPressedEx },
			],
		},
	];

	return (
		<NavWrapper
			headers={headers}
			title="ForceSensor"
			description="The force sensor is an external device that is connected to the hub through a port.
    The force sensor library can retrieve the amount of force applied to the force sensor, and
    detect if it has been pressed."
		>
			<Content>
				{/* section: GetPort() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type="integer">
							Returns the port number of the force sensor
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
						<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={GetPortEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetPort() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type="">
							None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
						<MethodParams params={[
								{ type: "integer", identifier: "port", description: "The port (0 through 5) the force sensor is attached to and what port number the force sensor object will be set to" },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={SetPortEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetForce() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the force applied to the force sensor in decinewtons
						from 0 to 100
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
						<ContentCode code={GetForceEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetForceRaw() */}
				<ContentSection header={headers[4]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[4].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the raw uncallibrated force applied to the force sensor
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
						<ContentCode code={GetForceRawEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: IsPressed() */}
				<ContentSection header={headers[5]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[5].subheaders[0]}>
						<MethodReturns type="boolean">
						Returns true if the sensor is pressed, false if it is not pressed
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[5].subheaders[1]}>
						<MethodParams
							params={[]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[5].subheaders[2]}>
						<ContentCode code={IsPressedEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
