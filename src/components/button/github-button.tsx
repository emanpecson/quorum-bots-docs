import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import GitHubSource from "../github-source";
import { docsGithubUrl, quorumLanguageGithubUrl, quorumStudioGithubUrl } from "@/data/url";
import { metadata } from "@/data/metadata";

export default function GitHubButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="w-fit h-full">
					<Image
						src={"/icons/github.svg"}
						alt="github"
						height={32}
						width={32}
						className="h-8 w-8 dark:invert"
					/>
				</button>
			</DialogTrigger>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<DialogTitle>GitHub Sources</DialogTitle>
					<DialogDescription>
						Collection of external links to relevant repositories.
					</DialogDescription>
				</DialogHeader>

				<div className="grid gap-4 grid-cols-2 pt-4">
					<GitHubSource
						label={metadata.title as string}
						description="Source for Quorum's LEGO® SPIKE™ library documentation website. Built using Next.js and Tailwind."
						url={docsGithubUrl}
						imageSrc="/images/docs-ui.png"
					/>
					<GitHubSource
						label="Quorum Language"
						description="Source for the Quorum language. The world's first evidence oriented programming language."
						url={quorumLanguageGithubUrl}
						imageSrc="/images/quorum-website.png"
					/>
					<GitHubSource
						label="Quorum Studio"
						description="Source for Quorum Studio. Build powerful programs with Quorum's development environment."
						url={quorumStudioGithubUrl}
						imageSrc="/images/quorum-studio-ui.png"
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}
