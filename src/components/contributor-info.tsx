import type { Contributor, Social } from "@/data/contributors";
import Image from "next/image";
import Link from "next/link";

export default function ContributorInfo({ contributor }: { contributor: Contributor }) {
	return (
		<div className="w-72 h-fit flex flex-col place-items-center space-y-2">
			<Link href={contributor.socials.length > 0 ? contributor.socials[0].url : "/contributors"}>
				<Image
					src={contributor.imageSrc}
					alt={`${contributor.name} image`}
					height={128}
					width={128}
					className="rounded-full object-cover h-32 w-32 shadow-md"
					unoptimized
				/>
			</Link>
			<p className="font-medium">{contributor.name}</p>
			<div className="flex flex-wrap gap-0.5 justify-center">
				{contributor.roles.map((role: string, i: number) => (
					<p
						key={i}
						className="rounded-full px-3 py-0.5 border text-xs text-nowrap font-light pointer-events-none"
					>
						{role}
					</p>
				))}
			</div>

			<div className="flex flex-wrap space-x-2.5 justify-center">
				{contributor.socials.map((social: Social, i: number) => (
					<Link key={i} href={social.url}>
						{typeof social.imageSrc === "string" ? (
							<Image
								src={social.imageSrc}
								alt={social.label}
								width={24}
								height={24}
								className="w-6 h-6 text-sm object-cover rounded-full dark:invert opacity-70 hover:opacity-100 hover:scale-[105%] transition-all duration-200"
							/>
						) : (
							<div className="w-6 h-6 rounded-full bg-black dark:bg-white opacity-70 hover:opacity-100 hover:scale-[105%] transition-all duration-200">
								<social.imageSrc strokeWidth={2.5} className="text-white dark:text-black p-1" />
							</div>
						)}
					</Link>
				))}
			</div>
		</div>
	);
}
