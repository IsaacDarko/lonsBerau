"use client";
import { graph } from "@public/assets/glassy";
import Image from "next/image";

const CardDeal = () => (
  <section className="section" id="product">
    <div className="sectionInfo">
      <h2 className="heading2">
        Find better deals <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
        Everything you need to accept payments and grow your business anywhere.
      </p>
    </div>

    <div className="sectionImg">
      <Image src={graph} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
