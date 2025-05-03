import FAQ from "@/components/faq";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";
import QrDialog from "@/components/qr-dialog";
import WhyPuch from "@/components/why-puch";

export default function Home() {
  return (
    <div className="flex flex-col gap-44">
      <HeroSection />
      <WhyPuch />
      <Pricing />
      <FAQ />
      <QrDialog />
    </div>
  );
}
