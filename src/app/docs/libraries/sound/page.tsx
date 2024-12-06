"use client";
import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { BeepEx, Beep2Ex, StopSoundEx, SetVolumeEx } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";


export default function SoundPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"constants",

		"Beep",
		"BeepRet",
		"BeepParams",
		"BeepEx",

		"Beep2",
		"Beep2Ret",
		"Beep2Params",
		"Beep2Ex",

		"StopSound",
		"StopSoundRet",
		"StopSoundParams",
		"StopSoundEx",

		"SetVolume",
		"SetVolumeRet",
		"SetVolumeParams",
		"SetVolumeEx",
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
			label: "Beep(integer frequency, integer duration, integer volume)",
			ref: refMap.Beep,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.BeepRet },
				{ id: "3", label: "Parameters", ref: refMap.BeepParams },
				{ id: "4", label: "Example", ref: refMap.BeepEx },
			],
		},
		{
			id: "5",
			label: "Beep(integer frequency, integer duration, integer volume, integer attack, integer decay, integer sustain, integer release, integer transition, integer waveform, integer channel)",
			ref: refMap.Beep2,
			subheaders: [
				{ id: "6", label: "Returns", ref: refMap.Beep2Ret },
				{ id: "7", label: "Parameters", ref: refMap.Beep2Params },
				{ id: "8", label: "Example", ref: refMap.Beep2Ex },
			],
		},
		{
			id: "9",
			label: "StopSound()",
			ref: refMap.StopSound,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.StopSoundRet },
				{ id: "11", label: "Parameters", ref: refMap.StopSoundParams },
				{ id: "12", label: "Example", ref: refMap.StopSoundEx },
			],
		},
		{
			id: "13",
			label: "SetVolume(integer vol)",
			ref: refMap.SetVolume,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.SetVolumeRet },
				{ id: "15", label: "Parameters", ref: refMap.SetVolumeParams },
				{ id: "16", label: "Example", ref: refMap.SetVolumeEx },
			],
		},
	]

	return (
		<NavWrapper
			headers={headers}
			title="Sound"
			description="The sound library is capable of playing sounds from the speaker embedded in the 
    Spike hub. It's basic functionalities include playing a sound, stopping sound, and 
    changing the volume of a sound."
		>
			<Content>
				{/* section: constants */}
				<ContentSection header={headers[0]}>
					<Constants
						constants={[
							{ type: "integer", identifier: "ANY", value: "-2" },
							{ type: "integer", identifier: "DEFAULT", value: "-1" },
							{ type: "integer", identifier: "WAVEFORM_SINE", value: "1" },
							{ type: "integer", identifier: "WAVEFORM_SAWTOOTH", value: "3" },
							{ type: "integer", identifier: "WAVEFORM_SQUARE", value: "2" },
							{ type: "integer", identifier: "WAVEFORM_TRIANGLE", value: "1" },
						]}
					/>
				</ContentSection>


				{/* section: Beep() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type={null}>
						Plays a sound from the hub utilizing frequency, duration, and the volume provided.
						Currently only capable of playing a sine wave with the provided parameters.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "frequency",
									description:
										"The frequency in hertz of the sound",
								},
								{
									type: "integer",
									identifier: "duration",
									description:
										"The duration in milliseconds of the sound",
								},
								{
									type: "integer",
									identifier: "volume",
									description:
										"The volume intensity of the sound from 0 to 100",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={BeepEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Beep() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type={null}>
						Plays a sound from the hub utilizing frequency, duration, volume, attack, decay, 
        sustain, release, transition, waveform, and channel arguments.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "frequency",
									description:
										"The frequency in hertz of the sound",
								},
								{
									type: "integer",
									identifier: "duration",
									description:
										"The duration in milliseconds of the sound",
								},
								{
									type: "integer",
									identifier: "volume",
									description:
										"The volume intensity of the sound from 0 to 100",
								},
								{
									type: "integer",
									identifier: "attack",
									description:
										"The time in milliseconds between the start of the sound to the peak",
								},
								{
									type: "integer",
									identifier: "decay",
									description:
										"The time in milliseconds between the peak volume to sustain volume",
								},
								{
									type: "integer",
									identifier: "sustain",
									description:
										"The volume intensity of the sustain of the sound between 0 and 100 until the sound is released",
								},
								{
									type: "integer",
									identifier: "release",
									description:
										"The time in milliseconds for the volume intensity to decay to 0 from release time",
								},
								{
									type: "integer",
									identifier: "transition",
									description:
										"The time in milliseconds for the sound to transition from the currently playing sound",
								},
								{
									type: "integer",
									identifier: "waveform",
									description:
										"The waveform to use to play the sound, using one of the constants defined in the Sound class",
								},
								{
									type: "integer",
									identifier: "channel",
									description:
										"The channel to play on, either DEFAULT or ANY from the constants defined in the Sound class",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={Beep2Ex} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: StopSound() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type={null}>
						Stops all sound coming from the hub
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
					<MethodParams params={[
						{
							type: "integer",
							identifier: "vol",
							description:
								"The volume intensity of the sound from 0 to 100",
						},
					]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={StopSoundEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetVolume() */}
				<ContentSection header={headers[4]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[4].subheaders[0]}>
						<MethodReturns type={null}>
						Sets the volume of the noise coming from the hub
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[4].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[4].subheaders[2]}>
						<ContentCode code={SetVolumeEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}

