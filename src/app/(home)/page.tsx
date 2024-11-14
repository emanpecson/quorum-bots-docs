import FAQSection from "@/components/home/faq-section";
import FeaturesSection from "@/components/home/features-section";
import HeroSection from "@/components/home/hero-section";
import PreviewSection from "@/components/home/preview-section";

export default function HomePage() {
	const blurDelay = 0.15;

	return (
		<div className="pb-32 space-y-16 sm:pt-24 pt-12">
			<div className="max-w-[86rem] space-y-36 mx-auto px-4">
				<HeroSection />
				<PreviewSection />
			</div>
			<div className="bg-neutral-100 dark:bg-neutral-900 py-16">
				<div className="max-w-[86rem] space-y-24 mx-auto lg:px-8 px-4">
					<FeaturesSection />
					<FAQSection />
				</div>
			</div>
		</div>
	);
}
