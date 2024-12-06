"use client";

import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { PlayEx, Play2Ex, StopEx, SetAttributesEx  } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";


export default function AppSoundPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"Play",
		"PlayRet",
		"PlayParams",
		"PlayEx",

		"Play2",
		"Play2Ret",
		"Play2Params",
		"Play2Ex",

		"Stop",
		"StopRet",
		"StopParams",
		"StopEx",

		"SetAttributes",
		"SetAttributesRet",
		"SetAttributesParams",
		"SetAttributesEx",
	]);

	// define content headers
	const headers: ContentHeaderType[] = [
		{
			id: "1",
			label: "Play(text soundName)",
			ref: refMap.Play,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.PlayRet },
				{ id: "3", label: "Parameters", ref: refMap.PlayParams },
				{ id: "4", label: "Example", ref: refMap.PlayEx },
			],
		},
		{
			id: "5",
			label: "Play(text soundName, integer volume, integer pitch, integer pan)",
			ref: refMap.Play2,
			subheaders: [
				{ id: "6", label: "Returns", ref: refMap.Play2Ret },
				{ id: "7", label: "Parameters", ref: refMap.Play2Params },
				{ id: "8", label: "Example", ref: refMap.Play2Ex },
			],
		},
		{
			id: "9",
			label: "Stop()",
			ref: refMap.Stop,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.StopRet },
				{ id: "11", label: "Parameters", ref: refMap.StopParams },
				{ id: "12", label: "Example", ref: refMap.StopEx },
			],
		},
		{
			id: "13",
			label: "SetAttributes(integer volume, integer pitch, integer pan)",
			ref: refMap.SetAttributes,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.SetAttributesRet },
				{ id: "15", label: "Parameters", ref: refMap.SetAttributesParams },
				{ id: "16", label: "Example", ref: refMap.SetAttributesEx },
			],
		},
	]

	return (
		<NavWrapper
			headers={headers}
			title="AppSound"
			description="The AppSound library is used to play sounds in the SPIKE App."
		>
			<Content>
				{/* section: constants */}

				{/* section: Play() */}
				<ContentSection header={headers[0]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[0].subheaders[0]}>
						<MethodReturns type={null}>
						Plays a sound from the SPIKE App (found in Word Blocks sound extension in SPIKE App)
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[0].subheaders[1]}>
					<MethodParams params={[
								{
									type: "text",
									identifier: "soundName",
									description:
										"Name of sound from SPIKE App",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[0].subheaders[2]}>
						<ContentCode code={PlayEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Play() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type={null}>
                        Plays a sound from the SPIKE App (found in Word Blocks sound extension in SPIKE App) using
        the provided volume, pitch, and pan arguments
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
					<MethodParams params={[
                                {
                                    type: "text",
                                    identifier: "soundName",
                                    description:
                                        "Name of sound from SPIKE App",
                                },                        
								{
									type: "integer",
									identifier: "volume",
									description:
										"The volume intensity of the sound from 0 to 100",
								},
								{
									type: "integer",
									identifier: "pitch",
									description:
										"The pitch of the sound",
								},
								{
									type: "integer",
									identifier: "pan",
									description:
										"Value that determines which speaker is emitting the sound, with -100 being only the left speaker, 0 being normal, and 100 being only the right speaker.",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={Play2Ex} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Stop() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type={null}>
						Stops all sound coming from the App
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={StopEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetVolume() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type={null}>
                        Sets the volume, pitch and pan attributes of the noise coming from the SPIKE App
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
                    <MethodParams params={[                       
								{
									type: "integer",
									identifier: "volume",
									description:
										"The volume intensity of the sound from 0 to 100",
								},
								{
									type: "integer",
									identifier: "pitch",
									description:
										"The pitch of the sound",
								},
								{
									type: "integer",
									identifier: "pan",
									description:
										"Value that determines which speaker is emitting the sound, with -100 being only the left speaker, 0 being normal, and 100 being only the right speaker.",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={SetAttributesEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}

