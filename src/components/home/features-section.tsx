import { MapIcon, SendIcon, SquareCodeIcon } from "lucide-react";
import FeatureInfo from "../feature-info";
import BlurFade from "../ui/blur-fade";
import Image from "next/image";

export default function FeaturesSection() {
	const blurFadeProps = { blur: "0px", duration: 0.5, yOffset: -4, delay: 0.6 };
	return (
		<BlurFade {...blurFadeProps}>
			<div className="space-y-12">
				<div className="mx-auto text-center lg:w-3/5 w-5/6 space-y-4">
					<Image
						src="/art/mascot-and-bot.png"
						alt="bunny and bot"
						height={24}
						width={24}
						className="sm:h-80 h-48 w-fit mx-auto"
						unoptimized
					/>
					<h2 className="lg:text-4xl md:text-3xl text-xl font-extrabold text-onyx dark:text-neutral-100">
						Bring your robot to life!
					</h2>
					<p className="md:text-xl text-base text-onyx dark:text-neutral-200">
						Introducing a new and accessible way to bring your LEGO® SPIKE™ robot to life. With
						many accessibility features, Quorum helps to enable all types of users who want to learn
						what engineering is all about.
					</p>
				</div>

				<div className="flex justify-center">
					<div className="flex max-lg:flex-col lg:space-x-8 lg:space-y-0 space-y-14 lg:justify-between">
						<FeatureInfo
							Icon={MapIcon}
							label="Endless functions"
							description="Quorum has integrated a wide range of LEGO® SPIKE™ functionalities like Button, Motor, DistanceSensor and more! Visit the docs to see how these tools work."
							imageSrc="/screenshots/docs-ui.png"
							imageAlt="docs ui"
							redirectUrl="/docs"
						/>
						<FeatureInfo
							Icon={SquareCodeIcon}
							label="Accessible programming"
							description="Write instructions for your LEGO® SPIKE™ robot using Quorum's keyboard-accessible coding blocks."
							imageSrc="/screenshots/quorum-studio-ui.png"
							imageAlt="send code ui"
							redirectUrl="/docs"
						/>
						<FeatureInfo
							Icon={SendIcon}
							label="Send and run"
							description="Send code from Quorum Studio directly to your LEGO® SPIKE™ robot and watch the magic happen."
							imageSrc="/screenshots/send-code-ui.png"
							imageAlt="send code ui"
							redirectUrl="/docs"
						/>

						{/* <FeatureInfo
						Icon={HandIcon}
						label="Accessible"
						description="Quorum is designed with accessibility features that have been carefully researched to help users with disabilities"
					/>
					<FeatureInfo
						Icon={BrainIcon}
						label="Educational"
						description="Learn how to program robots with the LEGO SPIKE kit, a fun way to dive into the field of robotics and engineering"
					/>
					<FeatureInfo
						Icon={RabbitIcon}
						label="Friendly"
						description="Quorum uses simple words in its syntax, making it an approachable language for beginner and experienced programmers"
					/> */}
					</div>
				</div>
			</div>
		</BlurFade>
	);
}
