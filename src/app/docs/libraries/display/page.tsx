"use client";

import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { HideEx, ImageEx, ShowEx, TextEx } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";


export default function DisplayPage() {
	// generate ref map using these names
	const refMap = useRefMap([
		"constants",

		"Hide",
		"HideRet",
		"HideParams",
		"HideEx",
		
		"Image",
		"ImageRet",
		"ImageParams",
		"ImageEx",

		"Show",
		"ShowRet",
		"ShowParams",
		"ShowEx",

		"Text",
		"TextRet",
		"TextParams",
		"TextEx",
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
			label: "Hide()",
			ref: refMap.Hide,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.HideRet },
				{ id: "3", label: "Parameters", ref: refMap.HideParams },
				{ id: "4", label: "Example", ref: refMap.HideEx },
			],
		},
		{
			id: "5",
			label: "Image(integer image)",
			ref: refMap.Image,
			subheaders: [
				{ id: "6", label: "Returns", ref: refMap.ImageRet },
				{ id: "7", label: "Parameters", ref: refMap.ImageParams },
				{ id: "8", label: "Example", ref: refMap.ImageEx },
			],
		},
		{
			id: "9",
			label: "Show(boolean fullscreen)",
			ref: refMap.Show,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.ShowRet },
				{ id: "11", label: "Parameters", ref: refMap.ShowParams },
				{ id: "12", label: "Example", ref: refMap.ShowEx },
			],
		},
		{
			id: "13",
			label: "Text(text value)",
			ref: refMap.Text,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.TextRet },
				{ id: "15", label: "Parameters", ref: refMap.TextParams },
				{ id: "16", label: "Example", ref: refMap.TextEx },
			],
		}
	];

	return (
		<NavWrapper
			headers={headers}
			title="Display"
			description=" The Display library is used to display images in the SPIKE App."
		>
			<Content>
				{/* section: constants */}
				<ContentSection header={headers[0]}>
					<Constants
						constants={[
							{ type: "integer", identifier: "IMAGE_ROBOT_1", value: "1" },
							{ type: "integer", identifier: "IMAGE_ROBOT_2", value: "2" },
							{ type: "integer", identifier: "IMAGE_ROBOT_3", value: "3" },
							{ type: "integer", identifier: "IMAGE_ROBOT_4", value: "4" },
							{ type: "integer", identifier: "IMAGE_ROBOT_5", value: "5" },
							{ type: "integer", identifier: "IMAGE_HUB_1", value: "6" },
							{ type: "integer", identifier: "IMAGE_HUB_2", value: "7" },
							{ type: "integer", identifier: "IMAGE_HUB_3", value: "8" },
							{ type: "integer", identifier: "IMAGE_HUB_4", value: "9" },
							{ type: "integer", identifier: "IMAGE_AMUSEMENT_PARK", value: "10" },
							{ type: "integer", identifier: "IMAGE_BEACH", value: "11" },
							{ type: "integer", identifier: "IMAGE_HAUNTED_HOUSE", value: "12" },
							{ type: "integer", identifier: "IMAGE_CARNIVAL", value: "13" },
							{ type: "integer", identifier: "IMAGE_BOOKSHELF", value: "14" },
							{ type: "integer", identifier: "IMAGE_PLAYGROUND", value: "15" },
							{ type: "integer", identifier: "IMAGE_MOON", value: "16" },
							{ type: "integer", identifier: "IMAGE_CAVE", value: "17" },
							{ type: "integer", identifier: "IMAGE_OCEAN", value: "18" },
							{ type: "integer", identifier: "IMAGE_POLAR_BEAR", value: "19" },
							{ type: "integer", identifier: "IMAGE_PARK", value: "20" },
							{ type: "integer", identifier: "IMAGE_RANDOM", value: "21" },
						]}
					/>
				</ContentSection>


				{/* section: Hide() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type={null}>
						Hides the currently displayed image or text in the App.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={HideEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Image() */}
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
									identifier: "image",
									description:
										"The image to show in the App, an integer value from 1 to 21 obtained from one of the constants provided in this class.",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={ImageEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Show() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type={null}>
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
					<MethodParams params={[
								{
									type: "boolean",
									identifier: "fullscreen",
									description:
										"A boolean which will determine if the current image is displayed in fullscreen if true, and as a pop-up if not.",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={ShowEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: Text() */}
				<ContentSection header={headers[4]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[4].subheaders[0]}>
						<MethodReturns type={null}>
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[4].subheaders[1]}>
					<MethodParams params={[
								{
									type: "text",
									identifier: "value",
									description:
										"The text to display to the screen in the App",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[4].subheaders[2]}>
						<ContentCode code={TextEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
