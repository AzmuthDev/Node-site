import { NodeHero } from "@/components/ui/node-hero";
import { ServiceShowcase } from "@/components/sections/service-showcase";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden bg-[#020617] selection:bg-[#19D1E6]/30">
      <NodeHero />
      <ServiceShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
