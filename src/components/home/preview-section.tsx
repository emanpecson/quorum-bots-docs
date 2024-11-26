"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import BlurFade from "../ui/blur-fade";

export default function PreviewSection() {
	const { resolvedTheme } = useTheme();
	const blurFadeProps = { blur: "0px", duration: 0.5, yOffset: -4, delay: 0.4 };

	return (
		<BlurFade {...blurFadeProps}>
			<div className="flex lg:justify-start justify-center">
				<Image
					src={
						resolvedTheme === "dark"
							? "/images/blocks-bunny-dark.png"
							: "/images/blocks-bunny-light.png"
					}
					alt="Bunny and bot"
					height={24}
					width={24}
					unoptimized
					className="w-fit object-contain max-h-80"
				/>
			</div>
		</BlurFade>
	);
}
