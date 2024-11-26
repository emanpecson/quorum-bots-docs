import { docsRouteGroups } from "@/data/routes";
import FooterLinks from "./footer-links";
import {
	docsGithubUrl,
	quorumLanguageUrl,
	quorumLogoUrl,
	quorumStudioUrl,
	researchReferencesUrl,
} from "@/data/url";
import { metadata } from "@/data/metadata";
import Image from "next/image";

export default function FooterSection() {
	return (
		<div className="w-full md:flex md:justify-between justify-start border-t pt-8 space-x-6 md:space-y-0 space-y-8">
			<div className="md:w-1/3 space-y-6 text-onyx dark:text-neutral-100">
				<div className="flex space-x-3 place-items-center">
					<Image
						src={quorumLogoUrl}
						alt="Quorum logo"
						height={36}
						width={36}
						className="dark:invert"
					/>
					<span className="font-semibold text-lg">{metadata.title as string}</span>
				</div>
				<p className="font-light">{metadata.description}</p>

				<div>
					<p className="font-medium">Disclaimer</p>
					<p className="font-light">
						LEGO® is a trademark of the LEGO Group of companies which does not sponsor, authorize
						or endorse this site.
					</p>
				</div>
			</div>

			{/* links + resources */}
			<div className="sm:flex sm:space-x-24 space-x-0 sm:space-y-0 space-y-4">
				<FooterLinks
					heading="Quorum"
					links={[
						{ label: "Quorum Language", href: quorumLanguageUrl },
						{ label: "Quorum Studio", href: quorumStudioUrl },
					]}
				/>
				<FooterLinks
					heading="Resources"
					links={[
						{ label: "GitHub", href: docsGithubUrl },
						{ label: "Research", href: researchReferencesUrl },
					]}
				/>
				<FooterLinks
					heading="Pages"
					links={[
						{ label: "Docs", href: docsRouteGroups[0].routes[0].path },
						{ label: "Libraries", href: docsRouteGroups[1].routes[0].path },
						{ label: "Contributors", href: "/contributors" },
					]}
				/>
			</div>
		</div>
	);
}
