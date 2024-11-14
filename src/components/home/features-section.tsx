import { BrainIcon, HandIcon, RabbitIcon } from "lucide-react";
import FeatureInfo from "../feature-info";

export default function FeaturesSection() {
	return (
		<div className="flex justify-center">
			<div className="flex max-lg:flex-col lg:space-x-8 lg:space-y-0 space-y-4 lg:justify-between">
				<FeatureInfo
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
				/>
			</div>
		</div>
	);
}
