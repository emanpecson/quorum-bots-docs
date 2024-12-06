"use client";

import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { GetDataFromPortEx, GetIDOfPortEx, GetDutyCycleEx, SetDutyCycleEx, IsPortReadyEx } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";


export default function DevicePage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"constants",

		"GetDataFromPort",
		"GetDataFromPortRet",
		"GetDataFromPortParams",
		"GetDataFromPortEx",
		
		"GetIDOfPort",
		"GetIDOfPortRet",
		"GetIDOfPortParams",
		"GetIDOfPortEx",

		"GetDutyCycle",
		"GetDutyCycleRet",
		"GetDutyCycleParams",
		"GetDutyCycleEx",

		"SetDutyCycle",
		"SetDutyCycleRet",
		"SetDutyCycleParams",
		"SetDutyCycleEx",

		"IsPortReady",
		"IsPortReadyRet",
		"IsPortReadyParams",
		"IsPortReadyEx",
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
			label: "GetDataFromPort(integer port)",
			ref: refMap.GetDataFromPort,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.GetDataFromPortRet },
				{ id: "3", label: "Parameters", ref: refMap.GetDataFromPortParams },
				{ id: "4", label: "Example", ref: refMap.GetDataFromPortEx },
			],
		},
		{
			id: "5",
			label: "GetIDOfPort(integer port)",
			ref: refMap.GetIDOfPort,
			subheaders: [
				{ id: "6", label: "Returns", ref: refMap.GetIDOfPortRet },
				{ id: "7", label: "Parameters", ref: refMap.GetIDOfPortParams },
				{ id: "8", label: "Example", ref: refMap.GetIDOfPortEx },
			],
		},
		{
			id: "9",
			label: "GetDutyCycle(integer port)",
			ref: refMap.GetDutyCycle,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.GetDutyCycleRet },
				{ id: "11", label: "Parameters", ref: refMap.GetDutyCycleParams },
				{ id: "12", label: "Example", ref: refMap.GetDutyCycleEx },
			],
		},
		{
			id: "13",
			label: "SetDutyCycle(integer port, integer duty_cycle)",
			ref: refMap.SetDutyCycle,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.SetDutyCycleRet },
				{ id: "15", label: "Parameters", ref: refMap.SetDutyCycleParams },
				{ id: "16", label: "Example", ref: refMap.SetDutyCycleEx },
			],
		},
		{
			id: "17",
			label: "IsPortReady(integer port)",
			ref: refMap.IsPortReady,
			subheaders: [
				{ id: "18", label: "Returns", ref: refMap.IsPortReadyRet },
				{ id: "19", label: "Parameters", ref: refMap.IsPortReadyParams },
				{ id: "20", label: "Example", ref: refMap.IsPortReadyEx },
			],
		}
	];

	return (
		<NavWrapper
			headers={headers}
			title="Device"
			description=" The device library allows you to gather information about the devices connected
    to each of the hubs ports, as well as set the duty cycle of a device at a specific
    port."
		>
			<Content>
				{/* section: constants */}
				<ContentSection header={headers[0]}>
					<Constants
						constants={[
							{ type: "integer", identifier: "MOTOR_MEDIUM_ID", value: "48" },
							{ type: "integer", identifier: "MOTOR_LARGE_ID", value: "49" },
							{ type: "integer", identifier: "COLOR_SENSOR_ID", value: "61" },
							{ type: "integer", identifier: "DISTANCE_SENSOR_ID", value: "62" },
							{ type: "integer", identifier: "FORCE_SENSOR_ID", value: "63" },
						]}
					/>
				</ContentSection>


				{/* section: GetDataFromPort() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type="Array<integer>">
						Returns the raw LPF-2 data from the device connected to the provided port. The
						data is returned in an integer array of size 8
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "port",
									description:
										"The port (ranging from A to F or 0 to 5) with the device to collect data from",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={GetDataFromPortEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetIDOfPOrt() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the integer ID of the device at the provided port
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "port",
									description:
										"The port (ranging from A to F or 0 to 5) with the device to get the ID of",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={GetIDOfPortEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetDutyCycle() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the PWM, the duty cycle (from 0 to 10000) of the device at the provided port
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "port",
									description:
										"The port (ranging from A to F or 0 to 5) with the device to get the duty cycle of",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={GetDutyCycleEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetDutyCycle() */}
				<ContentSection header={headers[4]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[4].subheaders[0]}>
						<MethodReturns type={null}>
						Sets the duty cycle (PWM) of a device at the provided port. Duty cycle value can range from 0 to 10000.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[4].subheaders[1]}>
						<MethodParams
							params={[
								{ type: "integer", identifier: "port", description: "The port (ranging from A to F or 0 to 5) with the device to set the duty cycle of" },
								{ type: "integer", identifier: "duty_cycle", description: "The integer value from 0 to 10000 to set the duty cycle of the device to" },
							]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[4].subheaders[2]}>
						<ContentCode code={SetDutyCycleEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: IsPortReady() */}
				<ContentSection header={headers[5]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[5].subheaders[0]}>
						<MethodReturns type="boolean">
						Returns true if the device is ready for requests, false if not
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[5].subheaders[1]}>
						<MethodParams
							params={[
								{ type: "integer", identifier: "port", description: "The port (ranging from A to F or 0 to 5) with the device to check the ready state of" },
							]}
						/>
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[5].subheaders[2]}>
						<ContentCode code={IsPortReadyEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
