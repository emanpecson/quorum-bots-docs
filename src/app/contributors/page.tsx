import { contributors } from "@/data/contributors";
import ContributorInfo from "@/components/contributor-info";

export default function Contributors() {
	return (
		<div className="py-4 space-y-12">
			<div className="space-y-1 flex flex-col place-items-center">
				<h1 className="text-4xl font-extrabold text-neutral-700 dark:text-neutral-200">
					Meet the team
				</h1>
				<p className="font-light text-lg text-neutral-800 dark:text-neutral-200">{`Building together for an inclusive future, brick by brick`}</p>
			</div>
			<div className="flex flex-wrap justify-center gap-8 place-items-start">
				{contributors.map((contributor, i) => (
					<ContributorInfo key={i} contributor={contributor} />
				))}
			</div>
		</div>
	);
}
