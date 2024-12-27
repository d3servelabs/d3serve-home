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
    <div className="flex flex-col w-full">
      <div className="px-8 py-20 min-h-screen w-full flex justify-center items-center -mt-20">
        <Container>
          <Banners />
        </Container>
      </div>
      <div className="px-8 py-40 bg-[#0e0e0e] w-full flex justify-center items-center">
        <Container>
          <Products />
        </Container>
      </div>
      <div className="px-8 py-40 bg-[#090909] w-full flex">
        <Container>
          <Trusts />
        </Container>
      </div>
      <div className="px-8 pt-40 bg-[#141414] w-full flex">
        <Container>
          <Labs />
        </Container>
      </div>
      <div className="px-8 py-40 bg-[#090909] w-full flex">
        <Container>
          <Companies />
        </Container>
      </div>
      <div className="px-8 py-40 bg-[#0e0e0e] w-full flex">
        <Container className="w-full flex gap-8">
          <Connect />
          <Subscribe />
        </Container>
      </div>
    </div>
  );
}
