import { Container } from "@/components/Container";
import { Banners } from "@/components/blocks/Banners";
import { Products } from "@/components/blocks/Products";
import { Trusts } from "@/components/blocks/Trusts";
import { Labs } from "@/components/blocks/Labs";
import { Companies } from "@/components/blocks/Companies";
import { Connect } from "@/components/Connect";
import { Subscribe } from "@/components/Subscribe";
import { Noise } from "@/components/Noise";
import SvgTrustGradient from "@/components/icons/gradients/TrustGradient";
import SvgHeroDotsLeft from "@/components/icons/dots/HeroDotsLeft";
import SvgHeroDotsRight from "@/components/icons/dots/HeroDotsRight";

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <div className="relative -mt-20 flex min-h-screen w-full items-center justify-center overflow-hidden px-8 py-10 md:py-20">
        <SvgHeroDotsLeft
          width={496}
          className="pointer-events-none absolute -left-36 top-1/2 hidden -translate-y-1/2 opacity-50 md:block md:opacity-75 lg:opacity-100"
        />
        <SvgHeroDotsRight
          width={496}
          className="pointer-events-none absolute -right-36 top-1/2 hidden -translate-y-1/2 opacity-50 md:block md:opacity-75 lg:opacity-100"
        />
        <Container>
          <Banners />
        </Container>
      </div>
      <div className="flex w-full items-center justify-center bg-[#0e0e0e] px-4 py-20 md:px-8 md:pb-40 md:pt-48">
        <Container>
          <Products />
        </Container>
      </div>
      <div className="relative flex w-full bg-[#090909] px-4 pb-24 pt-28 md:px-8 md:pb-48 md:pt-56">
        <SvgTrustGradient className="absolute left-0 top-0 size-full" />
        <Container>
          <Trusts />
        </Container>
      </div>
      <div className="mt:pt-48 flex w-full bg-[#141414] px-4 pt-24 md:px-8 md:pt-48">
        <Container>
          <Labs />
        </Container>
      </div>
      <div className="flex w-full bg-[#090909] px-4 pb-20 pt-36 md:px-8 md:pb-48 md:pt-56">
        <Container className="">
          <Companies />
        </Container>
      </div>

      <div className="flex w-full bg-[#0e0e0e] px-4 pt-20 md:px-8 md:pt-40">
        <Container className="relative flex w-full flex-col gap-4 rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.01)] px-4 py-12 shadow-[inset_0px_0px_100px_0px_rgba(255,255,255,0.07)] md:gap-8 md:px-8 md:py-24 lg:flex-row">
          <Noise className="pointer-events-none absolute inset-0 size-full rounded-3xl" />
          <Connect className="relative p-4 md:p-8" />
          <Subscribe className="relative p-4 md:p-8" />
        </Container>
      </div>
    </div>
  );
}
