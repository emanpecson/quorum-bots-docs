"use client";

import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { GetPortEx, SetPortEx, GetDutyCycleEx, SetDutyCycleEx, 
		 GetRelativePositionEx, SetRelativePositionEx, GetAbsolutePositionEx,
		 RunEx, RunForTimeEx, RunToDegreesEx, RunToRelativePositionEx, RunToAbsolutePositionEx,
		StopEx, GetVelocityEx } from "@/data/libraries/motor";
import UnderDevelopment from "@/components/placeholder/under-development";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function MotorPage() {
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

		"GetAbsolutePosition",
		"GetAbsolutePositionRet",
		"GetAbsolutePositionParams",
		"GetAbsolutePositionEx",

		"GetDutyCycle",
		"GetDutyCycleRet",
		"GetDutyCycleParams",
		"GetDutyCycleEx",
		
		"GetRelativePosition",
		"GetRelativePositionRet",
		"GetRelativePositionParams",
		"GetRelativePositionEx",

		"SetRelativePosition",
		"SetRelativePositionRet",
		"SetRelativePositionParams",
		"SetRelativePositionEx",

		"Run",
		"RunRet",
		"RunParams",
		"RunEx",

		"RunToDegrees",
		"RunToDegreesRet",
		"RunToDegreesParams",
		"RunToDegreesEx",

		"RunForTime",
		"RunForTimeRet",
		"RunForTimeParams",
		"RunForTimeEx",

		"RunToAbsolutePosition",
		"RunToAbsolutePositionRet",
		"RunToAbsolutePositionParams",
		"RunToAbsolutePositionEx",

		"RunToRelativePosition",
		"RunToRelativePositionRet",
		"RunToRelativePositionParams",
		"RunToRelativePositionEx",

		"SetDutyCycle",
		"SetDutyCycleRet",
		"SetDutyCycleParams",
		"SetDutyCycleEx",

		"Stop",
		"StopRet",
		"StopParams",
		"StopEx",

		"GetVelocity",
		"GetVelocityRet",
		"GetVelocityParams",
		"GetVelocityEx",
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
			label: "GetDutyCycle()",
			ref: refMap.GetDutyCycle,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.GetDutyCycleRet },
				{ id: "11", label: "Parameters", ref: refMap.GetDutyCycleParams },
				{ id: "12", label: "Example", ref: refMap.GetDutyCycleEx },
			],
		},
		{
			id: "13",
			label: "SetDutyCycle(integer pulseWidthModulation)",
			ref: refMap.SetDutyCycle,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.SetDutyCycleRet },
				{ id: "15", label: "Parameters", ref: refMap.SetDutyCycleParams },
				{ id: "16", label: "Example", ref: refMap.SetDutyCycleEx },
			],
		},
		{
			id: "17",
			label: "GetRelativePosition()",
			ref: refMap.GetRelativePosition,
			subheaders: [
				{ id: "18", label: "Returns", ref: refMap.GetRelativePositionRet },
				{ id: "19", label: "Parameters", ref: refMap.GetRelativePositionParams },
				{ id: "20", label: "Example", ref: refMap.GetRelativePositionEx },
			],
		},
		{
			id: "21",
			label: "SetRelativePosition(integer position)",
			ref: refMap.SetRelativePosition,
			subheaders: [
				{ id: "22", label: "Returns", ref: refMap.SetRelativePositionRet },
				{ id: "23", label: "Parameters", ref: refMap.SetRelativePositionParams },
				{ id: "24", label: "Example", ref: refMap.SetRelativePositionEx },
			],
		},
		{
			id: "25",
			label: "GetAbsolutePosition()",
			ref: refMap.GetAbsolutePosition,
			subheaders: [
				{ id: "26", label: "Returns", ref: refMap.GetAbsolutePositionRet },
				{ id: "27", label: "Parameters", ref: refMap.GetAbsolutePositionParams },
				{ id: "28", label: "Example", ref: refMap.GetAbsolutePositionEx },
			],
		},
		{
			id: "29",
			label: "Run(integer velocity)",
			ref: refMap.Run,
			subheaders: [
				{ id: "30", label: "Returns", ref: refMap.RunRet },
				{ id: "31", label: "Parameters", ref: refMap.RunParams },
				{ id: "32", label: "Example", ref: refMap.RunEx },
			],
		},
		{
			id: "33",
			label: "RunForTime(integer time, integer velocity)",
			ref: refMap.RunForTime,
			subheaders: [
				{ id: "34", label: "Returns", ref: refMap.RunForTimeRet },
				{ id: "35", label: "Parameters", ref: refMap.RunForTimeParams },
				{ id: "36", label: "Example", ref: refMap.RunForTimeEx },
			],
		},
		{
			id: "37",
			label: "RunToDegrees(integer degrees, integer velocity)",
			ref: refMap.RunToDegrees,
			subheaders: [
				{ id: "38", label: "Returns", ref: refMap.RunToDegreesRet },
				{ id: "39", label: "Parameters", ref: refMap.RunToDegreesParams },
				{ id: "40", label: "Example", ref: refMap.RunToDegreesEx },
			],
		},
		{
			id: "41",
			label: "RunToRelativePosition(integer position, integer velocity)",
			ref: refMap.RunToRelativePosition,
			subheaders: [
				{ id: "42", label: "Returns", ref: refMap.RunToRelativePositionRet },
				{ id: "43", label: "Parameters", ref: refMap.RunToRelativePositionParams },
				{ id: "44", label: "Example", ref: refMap.RunToRelativePositionEx },
			],
		},
		{
			id: "45",
			label: "RunToAbsolutePosition(integer position, integer velocity)",
			ref: refMap.RunToAbsolutePosition,
			subheaders: [
				{ id: "46", label: "Returns", ref: refMap.RunToAbsolutePositionRet },
				{ id: "47", label: "Parameters", ref: refMap.RunToAbsolutePositionParams },
				{ id: "48", label: "Example", ref: refMap.RunToAbsolutePositionEx },
			],
		},
		{
			id: "49",
			label: "Stop()",
			ref: refMap.Stop,
			subheaders: [
				{ id: "50", label: "Returns", ref: refMap.StopRet },
				{ id: "51", label: "Parameters", ref: refMap.StopParams },
				{ id: "52", label: "Example", ref: refMap.StopEx },
			],
		},
		{
			id: "53",
			label: "GetVelocity(integer position, integer velocity)",
			ref: refMap.GetVelocity,
			subheaders: [
				{ id: "54", label: "Returns", ref: refMap.GetVelocityRet },
				{ id: "55", label: "Parameters", ref: refMap.GetVelocityParams },
				{ id: "56", label: "Example", ref: refMap.GetVelocityEx },
			],
		},
	];

	return (
		<NavWrapper 
		title="Motor" 
		description="The motor is an external device that is connected to the hub through a port.
    It is a rotational device that can be attached to other objects to provide force. The motor library has various functions
	that can set the port of the motor, control the motor to run for some specified parameters, and get some data abour the motor. 
	Ranges for velocity vary per motor size as follows:
        
	Small motor: -660 to 660,
	Medium motor: -1110 to 1110,
	Large motor: -1050 to 1050"
		headers={headers}>
			<Content>
				{/* section: GetPort() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type="integer">
							Returns the port number of the motor
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
								{ type: "integer", identifier: "port", description: "The port (0 through 5) the motor is attached to and what port number the motor object will be set to" },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={SetPortEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetDutyCycle() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the current duty cycle (pwm) of the motor
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
						<ContentCode code={GetDutyCycleEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetDutyCycle() */}
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
								{ type: "integer", identifier: "pulseWidthModulation", description: "The pulse width modulation, from -10000 - 10000, that will be used to start this motor with" },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[4].subheaders[2]}>
						<ContentCode code={SetDutyCycleEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetRelativePosition() */}
				<ContentSection header={headers[5]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[5].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the relative position of a motor
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
						<ContentCode code={GetRelativePositionEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetRelativePosition() */}
				<ContentSection header={headers[6]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[6].subheaders[0]}>
						<MethodReturns type="">
						None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[6].subheaders[1]}>
					<MethodParams params={[
								{ type: "integer", identifier: "position", description: "The relative position that will be used to change the position used as an offset for RunToRelativePosition()" },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[6].subheaders[2]}>
						<ContentCode code={SetRelativePositionEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetAbsolutePosition() */}
				<ContentSection header={headers[7]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[7].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the relative position of a motor
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[7].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[7].subheaders[2]}>
						<ContentCode code={GetAbsolutePositionEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Run() */}
				<ContentSection header={headers[8]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[8].subheaders[0]}>
						<MethodReturns type="">
						None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[8].subheaders[1]}>
					<MethodParams params={[
								{ type: "integer", identifier: "velocity", description: "The velocity, in degrees per second, that the motor will be started with. " },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[8].subheaders[2]}>
						<ContentCode code={RunEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
				
				
				{/* section: RunForTime() */}
				<ContentSection header={headers[9]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[9].subheaders[0]}>
						<MethodReturns type="">
						None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[9].subheaders[1]}>
					<MethodParams params={[
								{ type: "integer", identifier: "time", description: "The time, in miliseconds, that the motor will run for with the given velocity." },
								{ type: "integer", identifier: "velocity", description: "The velocity, in degrees per second, that the motor will be started with." },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[9].subheaders[2]}>
						<ContentCode code={RunForTimeEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
				
				{/* section: RunToDegrees() */}
				<ContentSection header={headers[10]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[10].subheaders[0]}>
						<MethodReturns type="">
						None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[10].subheaders[1]}>
					<MethodParams params={[
								{ type: "integer", identifier: "degrees", description: "The degrees that the motor will run for with the given velocity." },
								{ type: "integer", identifier: "velocity", description: "The velocity, in degrees per second, that the motor will be started with." },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[10].subheaders[2]}>
						<ContentCode code={RunToDegreesEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: RunToRelativePosition() */}
				<ContentSection header={headers[11]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[11].subheaders[0]}>
						<MethodReturns type="">
						None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[11].subheaders[1]}>
					<MethodParams params={[
								{ type: "integer", identifier: "position", description: "The position that the motor will use to turn to relative to the current position." },
								{ type: "integer", identifier: "velocity", description: "The velocity, in degrees per second, that the motor will be started with." },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[11].subheaders[2]}>
						<ContentCode code={RunToRelativePositionEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: RunToAbsolutePosition() */}
				<ContentSection header={headers[12]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[12].subheaders[0]}>
						<MethodReturns type="">
						None
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[12].subheaders[1]}>
					<MethodParams params={[
								{ type: "integer", identifier: "position", description: "The absolute position that the motor will use to turn to." },
								{ type: "integer", identifier: "velocity", description: "The velocity, in degrees per second, that the motor will be started with." },
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[12].subheaders[2]}>
						<ContentCode code={RunToAbsolutePositionEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Stop() */}
				<ContentSection header={headers[13]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[13].subheaders[0]}>
						<MethodReturns type="">
						None: Is used to stop the motor from running.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[13].subheaders[1]}>
					<MethodParams params={[
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[13].subheaders[2]}>
						<ContentCode code={StopEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>


				{/* section: GetVelocity() */}
				<ContentSection header={headers[14]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[14].subheaders[0]}>
						<MethodReturns type="integer">
						Returns the velocity in degrees/second of the motor
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[14].subheaders[1]}>
					<MethodParams params={[
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[14].subheaders[2]}>
						<ContentCode code={GetVelocityEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

			</Content>
		</NavWrapper>
	);
}
