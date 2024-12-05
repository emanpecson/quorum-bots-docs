"use client";

import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { PlayDrumEx, PlayInstrumentEx } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function MusicPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"constants",

		"PlayDrum",
		"PlayDrumRet",
		"PlayDrumParams",
		"PlayDrumEx",

		"PlayInstrument",
		"PlayInstrumentRet",
		"PlayInstrumentParams",
		"PlayInstrumentEx",
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
			label: "PlayDrum(integer drum)",
			ref: refMap.IsLeftPressed,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.PlayDrumRet },
				{ id: "3", label: "Parameters", ref: refMap.PlayDrumParams },
				{ id: "4", label: "Example", ref: refMap.PlayDrumEx },
			],
		},
		{
			id: "5",
			label: "PlayInstrument(integer instrument, integer note, integer duration)",
			ref: refMap.IsRightPressed,
			subheaders: [
				{ id: "6", label: "Returns", ref: refMap.PlayInstrumentRet },
				{ id: "7", label: "Parameters", ref: refMap.PlayInstrumentParams },
				{ id: "8", label: "Example", ref: refMap.PlayInstrumentEx },
			],
		},
	];

	return (
		<NavWrapper
			headers={headers}
			title="Music"
			description="The music library is used to play music through the SPIKE App."
		>
			<Content>
				{/* section: constants */}
				<ContentSection header={headers[0]}>
					<Constants
						constants={[
							{ type: "integer", identifier: "DRUM_SNARE", value: "1" },
							{ type: "integer", identifier: "DRUM_BASS", value: "2" },
                            { type: "integer", identifier: "DRUM_SIDE_STICK", value: "3" },
							{ type: "integer", identifier: "DRUM_CRASH_CYMBAL", value: "4" },
                            { type: "integer", identifier: "DRUM_OPEN_HI_HAT", value: "5" },
							{ type: "integer", identifier: "DRUM_CLOSED_HI_HAT", value: "6" },
                            { type: "integer", identifier: "DRUM_TAMBOURINE", value: "7" },
							{ type: "integer", identifier: "DRUM_HAND_CLAP", value: "8" },
                            { type: "integer", identifier: "DRUM_CLAVES", value: "9" },
							{ type: "integer", identifier: "DRUM_WOOD_BLOCK", value: "10" },
                            { type: "integer", identifier: "DRUM_COWBELL", value: "11" },
							{ type: "integer", identifier: "DRUM_TRIANGLE", value: "12" },
                            { type: "integer", identifier: "DRUM_BONGO", value: "13" },
							{ type: "integer", identifier: "DRUM_CONGA", value: "14" },
                            { type: "integer", identifier: "DRUM_CABASA", value: "15" },
							{ type: "integer", identifier: "DRUM_GUIRO", value: "16" },
                            { type: "integer", identifier: "DRUM_VIBRASLAP", value: "17" },
							{ type: "integer", identifier: "DRUM_CUICA", value: "18" },

							{ type: "integer", identifier: "INSTRUMENT_PIANO", value: "1" },
                            { type: "integer", identifier: "INSTRUMENT_ELECTRIC_PIANO", value: "2" },
							{ type: "integer", identifier: "INSTRUMENT_ORGAN", value: "3" },
                            { type: "integer", identifier: "INSTRUMENT_GUITAR", value: "4" },
							{ type: "integer", identifier: "INSTRUMENT_ELECTRIC_GUITAR", value: "5" },
                            { type: "integer", identifier: "INSTRUMENT_BASS", value: "6" },
							{ type: "integer", identifier: "INSTRUMENT_PIZZICATO", value: "7" },
							{ type: "integer", identifier: "INSTRUMENT_CELLO", value: "8" },
                            { type: "integer", identifier: "INSTRUMENT_TROMBONE", value: "9" },
							{ type: "integer", identifier: "INSTRUMENT_CLARINET", value: "10" },
                            { type: "integer", identifier: "INSTRUMENT_SAXOPHONE", value: "11" },
							{ type: "integer", identifier: "INSTRUMENT_FLUTE", value: "12" },
                            { type: "integer", identifier: "INSTRUMENT_WOODEN_FLUTE", value: "13" },
							{ type: "integer", identifier: "INSTRUMENT_BASSOON", value: "14" },
                            { type: "integer", identifier: "INSTRUMENT_CHOIR", value: "15" },
							{ type: "integer", identifier: "INSTRUMENT_VIBRAPHONE", value: "16" },
                            { type: "integer", identifier: "INSTRUMENT_MUSIC_BOX", value: "17" },
							{ type: "integer", identifier: "INSTRUMENT_STEEL_DRUM", value: "18" },
                            { type: "integer", identifier: "INSTRUMENT_MARIMBA", value: "19" },
							{ type: "integer", identifier: "INSTRUMENT_SYNTH_LEAD", value: "20" },
                            { type: "integer", identifier: "INSTRUMENT_SYNTH_PAD", value: "21" },
						]}
					/>
				</ContentSection>


				{/* section: PlayDrum() */}
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
									identifier: "drum",
									description: "Which drum to play, out of the DRUM constants",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={PlayDrumEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

                {/* section: PlayInstrument() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type={null}>
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
                    <MethodParams params={[
								{
									type: "integer",
									identifier: "instrument",
									description: "Which instrument to play, out of the INSTRUMENT constants",
								},
                                {
									type: "integer",
									identifier: "note",
									description: "The midi note to play (0-130)",
								},
                                {
									type: "integer",
									identifier: "duration",
									description: "How long to play the instrument/note for, in milliseconds",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={PlayInstrumentEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
