"use client";
import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { SleepEx, GetDeviceUUIDEx, GetHardwareIDEx, PowerOffEx, GetTemperatureEx } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function HubPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"Sleep",
		"SleepRet",
		"SleepParams",
		"SleepEx",
		
		"GetDeviceUUID",
		"GetDeviceUUIDRet",
		"GetDeviceUUIDParams",
		"GetDeviceUUIDEx",

		"GetHardwareID",
		"GetHardwareIDRet",
		"GetHardwareIDParams",
		"GetHardwareIDEx",

		"PowerOff",
		"PowerOffRet",
		"PowerOffParams",
		"PowerOffEx",

		"GetTemperature",
		"GetTemperatureRet",
		"GetTemperatureParams",
		"GetTemperatureEx",
	]);

	// define content headers
	const headers: ContentHeaderType[] = [
		{
			id: "1",
			label: "Sleep(integer value)",
			ref: refMap.Sleep,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.SleepRet },
				{ id: "3", label: "Parameters", ref: refMap.SleepParams },
				{ id: "4", label: "Example", ref: refMap.SleepEx },
			],
		},
		{
			id: "5",
			label: "GetDeviceUUID()",
			ref: refMap.GetDeviceUUID,
			subheaders: [
				{ id: "6", label: "Returns", ref: refMap.GetDeviceUUIDRet },
				{ id: "7", label: "Parameters", ref: refMap.GetDeviceUUIDParams },
				{ id: "8", label: "Example", ref: refMap.GetDeviceUUIDEx },
			],
		},
		{
			id: "9",
			label: "GetHardwareID()",
			ref: refMap.GetHardwareID,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.GetHardwareIDRet },
				{ id: "11", label: "Parameters", ref: refMap.GetHardwareIDParams },
				{ id: "12", label: "Example", ref: refMap.GetHardwareIDEx },
			],
		},
		{
			id: "13",
			label: "PowerOff()",
			ref: refMap.PowerOff,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.PowerOffRet },
				{ id: "15", label: "Parameters", ref: refMap.PowerOffParams },
				{ id: "16", label: "Example", ref: refMap.PowerOffEx },
			],
		},
		{
			id: "17",
			label: "GetTemperature()",
			ref: refMap.GetTemperature,
			subheaders: [
				{ id: "18", label: "Returns", ref: refMap.GetTemperatureRet },
				{ id: "19", label: "Parameters", ref: refMap.GetTemperatureParams },
				{ id: "20", label: "Example", ref: refMap.GetTemperatureEx },
			],
		}
	];

	return (
		<NavWrapper
			headers={headers}
			title="Hub"
			description="The hub library provides basic functionalities to get information about the hub
    as well as pause the hub's actions for a specified time in milliseconds. The information
    available includes the device UUID number, the Hardware ID number, and the temperature
    of the hub."
		>
			<Content>
				{/* section: Sleep() */}
				<ContentSection header={headers[0]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[0].subheaders[0]}>
						<MethodReturns type={null}>
						Pauses the hub from executing instructions for a given time in milliseconds.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[0].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "value",
									description:
										"The time in milliseconds to Sleep",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[0].subheaders[2]}>
						<ContentCode code={SleepEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetDeviceUUID() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type="text">
						Returns a string of the device id.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={GetDeviceUUIDEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetHardwareID() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type="text">
						Returns a string of the hardware id.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={GetHardwareIDEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: PowerOff() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type="integer">
						Turns off the Spike hub.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={PowerOffEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetTemperature() */}
				<ContentSection header={headers[4]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[4].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the temperature of the hub in decidegrees Celsius, which is 1/10 of a degree Celsius
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={GetTemperatureEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}