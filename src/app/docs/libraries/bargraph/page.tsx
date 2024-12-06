"use client";
import Content from "@/components/content/content";
import ContentCode from "@/components/content/content-code";
import ContentSection from "@/components/content/content-section";
import ContentSubsection from "@/components/content/content-subsection";
import Constants from "@/components/library/constants";
import MethodParams from "@/components/library/method-params";
import MethodReturns from "@/components/library/method-returns";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { ChangeEx, ClearAllEx, GetValueEx, HideEx, SetValueEx, ShowEx } from "./data";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

export default function BargraphPage() {
	// generate ref map using these names
	const refMap = useRefMap([

		"Change",
		"ChangeRet",
		"ChangeParams",
		"ChangeEx",
		
		"ClearAll",
		"ClearAllRet",
		"ClearAllParams",
		"ClearAllEx",

		"GetValue",
		"GetValueRet",
		"GetValueParams",
		"GetValueEx",

		"Hide",
		"HideRet",
		"HideParams",
		"HideEx",

    "SetValue",
		"SetValueRet",
		"SetValueParams",
		"SetValueEx",

    "Show",
		"ShowRet",
		"ShowParams",
		"ShowEx",
	]);

	// define content headers
	const headers: ContentHeaderType[] = [
    {
			id: "1",
			label: "Change(integer color, number value)",
			ref: refMap.Change,
			subheaders: [
				{ id: "2", label: "Returns", ref: refMap.ChangeRet },
				{ id: "3", label: "Parameters", ref: refMap.ChangeParams },
				{ id: "4", label: "Example", ref: refMap.ChangeEx },
			],
		},
    {
			id: "5",
			label: "ClearAll()",
			ref: refMap.ClearAll,
			subheaders: [
				{ id: "6", label: "Returns", ref: refMap.ClearAllRet },
				{ id: "7", label: "Parameters", ref: refMap.ClearAllParams },
				{ id: "8", label: "Example", ref: refMap.ClearAllEx },
			],
		},
    {
			id: "9",
			label: "GetValue(integer color)",
			ref: refMap.GetValue,
			subheaders: [
				{ id: "10", label: "Returns", ref: refMap.GetValueRet },
				{ id: "11", label: "Parameters", ref: refMap.GetValueParams },
				{ id: "12", label: "Example", ref: refMap.GetValueEx },
			],
		},
    {
			id: "13",
			label: "SetValue(integer color, number value)",
			ref: refMap.SetValue,
			subheaders: [
				{ id: "14", label: "Returns", ref: refMap.SetValueRet },
				{ id: "15", label: "Parameters", ref: refMap.SetValueParams },
				{ id: "16", label: "Example", ref: refMap.SetValueEx },
			],
		},
		{
			id: "17",
			label: "Hide()",
			ref: refMap.Hide,
			subheaders: [
				{ id: "18", label: "Returns", ref: refMap.HideRet },
				{ id: "19", label: "Parameters", ref: refMap.HideParams },
				{ id: "20", label: "Example", ref: refMap.HideEx },
			],
		},
		{
			id: "21",
			label: "Show(boolean fullscreen)",
			ref: refMap.Show,
			subheaders: [
				{ id: "22", label: "Returns", ref: refMap.ShowRet },
				{ id: "23", label: "Parameters", ref: refMap.ShowParams },
				{ id: "24", label: "Example", ref: refMap.ShowEx },
			],
		},
	];

	return (
		<NavWrapper
			headers={headers}
			title="Bargraph"
			description="The Bargraph library is used to graph and display bargraphs in the SPIKE App. 
    The categories in the bargraph are the different color values from the Color library."
		>
			<Content>
				{/* section: Change() */}
				<ContentSection header={headers[0]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[0].subheaders[0]}>
						<MethodReturns type={null}>
						Adds the provided value to the value that corresponds to the selected color
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[0].subheaders[1]}>
          <MethodParams params={[
								{
									type: "integer",
									identifier: "color",
									description:
										"The color constant whose value will be changed (see Color).",
								},
                {
									type: "integer",
									identifier: "value",
									description:
										"The value to be added.",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[0].subheaders[2]}>
						<ContentCode code={ChangeEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: ClearAll() */}
				<ContentSection header={headers[1]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[1].subheaders[0]}>
						<MethodReturns type={null}>
            Set the corresponding values for each color back to 0
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[1].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[1].subheaders[2]}>
						<ContentCode code={ClearAllEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: GetValue() */}
				<ContentSection header={headers[2]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[2].subheaders[0]}>
						<MethodReturns type="number">
            The corresponding value for the provided color
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[2].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "color",
									description:
										"The color constant whose value will be returned (see Color)",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[2].subheaders[2]}>
						<ContentCode code={GetValueEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

				{/* section: SetValue() */}
				<ContentSection header={headers[3]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[3].subheaders[0]}>
						<MethodReturns type={null}>
            Sets the value corresponding to the color in the bargraph
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[3].subheaders[1]}>
					<MethodParams params={[
								{
									type: "integer",
									identifier: "color",
									description:
										"The color constant whose value will be set (see Color).",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[3].subheaders[2]}>
						<ContentCode code={SetValueEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

        {/* section: Hide() */}
				<ContentSection header={headers[4]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[4].subheaders[0]}>
						<MethodReturns type={null}>
            Hides the currently displayed bargraph in the App.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[4].subheaders[1]}>
					<MethodParams params={[]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[4].subheaders[2]}>
						<ContentCode code={HideEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

        {/* section: Hide() */}
				<ContentSection header={headers[5]}>
					{/* sub-section: returns */}
					<ContentSubsection subheader={headers[5].subheaders[0]}>
						<MethodReturns type={null}>
            Hides the currently displayed bargraph in the App.
						</MethodReturns>
					</ContentSubsection>

					{/* sub-section: params */}
					<ContentSubsection subheader={headers[5].subheaders[1]}>
          <MethodParams params={[
								{
									type: "boolean",
									identifier: "fullscreen",
									description:
										"A boolean which will show the bargraph in fullscreen if true, and as a pop-up if not. ",
								},
							]} />
					</ContentSubsection>

					{/* sub-section: example */}
					<ContentSubsection subheader={headers[5].subheaders[2]}>
						<ContentCode code={ShowEx} showLineNumbers />
					</ContentSubsection>
				</ContentSection>

			</Content>
		</NavWrapper>
	);
}
