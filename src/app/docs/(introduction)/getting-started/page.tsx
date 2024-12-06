"use client";

import Content from "@/components/content/content";
import ContentImage from "@/components/content/content-image";
import ContentSection from "@/components/content/content-section";
import ContentText from "@/components/content/content-text";
import InlineLink from "@/components/inline-link";
import NavWrapper from "@/components/navigation/nav-wrapper";
import { Button } from "@/components/ui/button";
import { docsRouteGroups } from "@/data/routes";
import { quorumStudioUrl } from "@/data/url";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";
import Link from "next/link";

export default function GettingStartedPage() {
	const refMap = useRefMap(["installation", "newProject", "writeCode", "sendToRobot"]);

	const headers: ContentHeaderType[] = [
		{ id: "0", label: "Step 1: Install Quorum Studio", ref: refMap.installation, subheaders: [] },
		{ id: "1", label: "Step 2: New Project", ref: refMap.newProject, subheaders: [] },
		{ id: "2", label: "Step 3: Write Code", ref: refMap.writeCode, subheaders: [] },
		{ id: "3", label: "Step 4: Send to Robot", ref: refMap.sendToRobot, subheaders: [] },
	];

	return (
		<NavWrapper
			title="Getting Started"
			description="A quick and easy tutorial for starting a LEGO® SPIKE™ project in Quorum Studio"
			headers={headers}
		>
			<Content>
				{/* install quorum studio */}
				<ContentSection header={headers[0]}>
					<ContentText>
						<span>Install</span>
						<InlineLink href={quorumStudioUrl}>Quorum Studio</InlineLink>
						<span>
							to use {"Quorum's"} official development environment. This will give you full access
							to the tools necessary to write Quorum code and send it to the LEGO® SPIKE™ robot.
						</span>
					</ContentText>
					<Button variant="outline" asChild>
						<Link rel="noopener noreferrer" target="_blank" href={quorumStudioUrl}>
							Install Quorum Studio
						</Link>
					</Button>
				</ContentSection>

				{/* start a project */}
				<ContentSection header={headers[1]}>
					<ContentText>
						Once you have Quorum Studio opened up, you can find a toolbar at the top. Click the
						option {'"File"'} and click {'"New Project"'} in the dropdown. Optionally, you can use
						the {'"Ctrl + K" or "Command + K"'} shortcut.
					</ContentText>
					<ContentImage
						src="/images/new-proj-menu-option.png"
						alt="New project menu option image"
					/>
					<ContentText>
						In the popup, you must enter a
						{' "Project Name" and "Project Location". Then click "Ok".'}
					</ContentText>
					<ContentImage src="/images/new-proj-dialog.png" alt="New project dialog image" />
				</ContentSection>

				{/* write code */}
				<ContentSection header={headers[2]}>
					<ContentText>
						On the left panel, you will see the name of the project you just created. Open all of
						the dropdowns until you see a file called {'"Main.quorum"'}, then open this. You should
						now see the following:
					</ContentText>
					<ContentImage src="/images/blank-proj.png" alt="Empty project image" />

					<ContentText>
						<span>If you are new to Quorum or programming,</span>
						<InlineLink href="https://quorumlanguage.com/tutorials/blocks/gettingStartedBlocks.html">
							click this
						</InlineLink>
						<span>for a tutorial on how to write Quorum code.</span>
					</ContentText>

					<ContentText>
						<span>
							Here is an example of some Quorum code that would activate one of the motors on the
							robot. To learn about all of the things your robot can do and how to use it in Quorum,
							visit our
						</span>
						<InlineLink href={docsRouteGroups[1].routes[0].path}>docs.</InlineLink>
					</ContentText>
					<ContentImage src="/images/quorum-studio-ui.png" alt="Quorum code image" />
				</ContentSection>

				{/* send to robot */}
				<ContentSection header={headers[3]}>
					<ContentText>
						In the toolbar, click the option {'"Edit" and click "Edit Project Properties"'} in the
						dropdown. Optionally, you can use the {'"Ctrl + P" or "Command + P"'} shortcut.
					</ContentText>
					<ContentImage
						src="/images/proj-properties-menu-option.png"
						alt="Project properties menu option image"
					/>

					<ContentText>
						In the popup, click the tab labeled {'"Spike"'} at the top. Then from here, you will be
						able to select a slot to send the Quorum code to the LEGO® SPIKE™ robot. When you are
						ready, click {'"Ok."'}
					</ContentText>
					<ContentImage src="/images/send-code-ui.png" alt="Send code dialog image" />
					<ContentText>That is it!</ContentText>
				</ContentSection>
			</Content>
		</NavWrapper>
	);
}
