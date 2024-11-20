import Image from "next/image";
import { HeroSection } from "../components/HeroSection";
import { CountUpStats } from "../components/CountUpStats";
import { InfoSection } from "../components/InfoSection";
import LogoRow from "../components/LogoRow";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CountUpStats />
      <InfoSection />
      <LogoRow />
    </div>
  );
}
