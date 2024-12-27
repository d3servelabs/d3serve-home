import { Container } from "@/components/Container";
import { Banners } from "@/components/blocks/Banners";
import { Products } from "@/components/blocks/Products";
import { Trusts } from "@/components/blocks/Trusts";
import { Labs } from "@/components/blocks/Labs";
import { Companies } from "@/components/blocks/Companies";
import { Connect } from "@/components/Connect";
import { Subscribe } from "@/components/Subscribe";

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <div className="-mt-20 flex min-h-screen w-full items-center justify-center px-8 py-20">
        <Container>
          <Banners />
        </Container>
      </div>
      <div className="flex w-full items-center justify-center bg-[#0e0e0e] px-8 py-40">
        <Container>
          <Products />
        </Container>
      </div>
      <div className="flex w-full bg-[#090909] px-8 py-40">
        <Container>
          <Trusts />
        </Container>
      </div>
      <div className="flex w-full bg-[#141414] px-8 pt-40">
        <Container>
          <Labs />
        </Container>
      </div>
      <div className="flex w-full bg-[#090909] px-8 py-40">
        <Container>
          <Companies />
        </Container>
      </div>
      <div className="flex w-full bg-[#0e0e0e] px-8 py-40">
        <Container className="flex w-full gap-8">
          <Connect />
          <Subscribe />
        </Container>
      </div>
    </div>
  );
}
