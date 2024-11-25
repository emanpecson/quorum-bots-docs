import FeaturesSection from "@/components/home/features-section";
import FooterSection from "@/components/home/footer/footer-section";
import HeroSection from "@/components/home/hero-section";
import PreviewSection from "@/components/home/preview-section";
import SectionWrapper from "@/components/home/section-wrapper";

export default function HomePage() {
	return (
		<div className="pb-32 space-y-16 sm:pt-24 pt-12">
			<SectionWrapper>
				<div className="lg:flex lg:space-x-8 lg:space-y-0 space-y-8">
					<div className="lg:w-1/2 w-full">
						<HeroSection />
					</div>
					<div className="lg:w-1/2 w-full">
						<PreviewSection />
					</div>
				</div>
			</SectionWrapper>
			<SectionWrapper>
				<FeaturesSection />
			</SectionWrapper>
			<SectionWrapper>
				<FooterSection />
			</SectionWrapper>
		</div>
	);
}
