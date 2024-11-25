import { ChevronRightIcon, LucideIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface FeatureInfoProps {
	Icon: LucideIcon;
	label: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
	redirectUrl?: string;
}

export default function FeatureInfo(props: FeatureInfoProps) {
	return (
		<div className="lg:w-full md:w-[36rem] w-full space-y-3">
			<div className="bg-neutral-200/80 dark:bg-neutral-700/80 w-full h-60 rounded-xl p-3.5 flex justify-center place-items-center">
				<Image
					src={props.imageSrc}
					alt={props.imageAlt}
					height={24}
					width={24}
					unoptimized
					className="h-full w-fit rounded-md shadow-lg"
				/>
			</div>

			<div className="flex space-x-3 place-items-start">
				<div className="p-2.5 rounded-full justify-center place-items-center bg-neutral-200/80 dark:bg-neutral-700/70">
					<props.Icon strokeWidth={2.5} className="text-neutral-600 dark:text-neutral-200" />
				</div>
				<div className="space-y-1">
					<h3 className="font-bold text-xl text-onyx dark:text-neutral-100">{props.label}</h3>
					<p className="font-light text-lg text-onyx dark:text-neutral-200">{props.description}</p>
					{props.redirectUrl && (
						<Link
							href={props.redirectUrl}
							className="font-medium flex space-x-2 place-items-center w-fit"
						>
							<span>Learn more</span>
							<ChevronRightIcon size={20} />
						</Link>
					)}
				</div>
			</div>
		</div>
	);
}
