"use client";

import { quorumStudioUrl } from "@/data/url";
import { CodeXmlIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "../ui/blur-fade";
import { useTheme } from "next-themes";

export default function PreviewSection() {
	const { resolvedTheme } = useTheme();

	return (
		<div className="w-full flex justify-center lg:pr-52">
			<BlurFade duration={1} blur="0px">
				<div className="relative">
					<Image
						src={
							resolvedTheme === "light"
								? "/screenshots/quorum-blocks-light.png"
								: "/screenshots/quorum-blocks-dark.png"
						}
						alt="quorum studio"
						height={24}
						width={24}
						className="rounded-lg border shadow-xl md:w-[40rem] lg:w-[52rem] w-fit"
						unoptimized
					/>

					{/* let's code */}
					<div className="p-6 border rounded-2xl space-y-4 sm:w-[28rem] w-full h-fit lg:absolute lg:-right-52 lg:top-36 bg-background shadow-xl mx-auto lg:mx-0 mt-6 lg:mt-0">
						<div className="flex space-x-5 place-items-center text-neutral-700 dark:text-neutral-300">
							<div>
								<CodeXmlIcon className="lg:block hidden" size={40} strokeWidth={3} />
								<CodeXmlIcon className="lg:hidden block" size={32} strokeWidth={3} />
							</div>
							<code className="lg:text-4xl text-2xl font-extrabold">{`Let's code!`}</code>
						</div>
						<div className="font-normal lg:text-lg text-base space-y-2">
							<p>Introducing a new and accessible way to bring your LEGO SPIKE robot to life.</p>
							<p className="space-x-1.5">
								<span>You can now use</span>
								<span className="hover:underline text-blue-700 dark:text-blue-400 font-medium">
									<Link href={quorumStudioUrl}>Quorum Studio</Link>
								</span>
								<span>to send code to your robot.</span>
							</p>
							<p>
								With many accessibility features, Quorum helps to enable all types of users who want
								to see what engineering is all about.
							</p>
						</div>
					</div>
				</div>
			</BlurFade>
		</div>
	);
}
