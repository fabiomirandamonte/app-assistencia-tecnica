import Image from "next/image";
import LeftHeader from "./LeftHeader";
import HeroSection from "./HeroSection";
import FeatureList from "./FeatureList";

export default function LeftPanel() {
  return (
    <section className="relative w-[55%] overflow-hidden">
      <Image
        src="/images/fundo02.png"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-blue-950/75" />

      <div className="absolute inset-0 flex flex-col p-12">
        <div>
            <LeftHeader />
            <HeroSection />
            <FeatureList />
        </div>
      </div>
    </section>
  );
}