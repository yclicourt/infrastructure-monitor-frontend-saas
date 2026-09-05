import HeaderHome from "@/app/components/home/HeaderHome";
import HeroHome from "@/app/components/home/HeroHome";
import FeatureHome from "@/app/components/home/FeatureHome";
import BenefitHome from "@/app/components/home/BenefitHome";
import CTAHome from "@/app/components/home/CTAHome";
import FooterHome from "@/app/components/home/FooterHome";
import BackgroundDecorationHome from "@/app/components/home/BackgroundDecorationHome";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B101D] text-white">
      {/* Background decoration */}

      <BackgroundDecorationHome />

      {/* Header */}

      <HeaderHome />

      {/* Hero */}

      <HeroHome />
      {/* Features */}

      <FeatureHome />

      {/* Benefits */}

      <BenefitHome />

      {/* CTA */}

      <CTAHome />

      {/* Footer */}

      <FooterHome />
    </main>
  );
}
