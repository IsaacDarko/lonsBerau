"use client";
import { features } from "@public/assets/constants";
import Image from "next/image";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-4 rounded items-center ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-[64px] h-[64px] rounded-full flexCenter bg-dimBlue`}>
      <Image
        src={`/assets/glassy/${icon}`}
        alt="icon"
        width={30}
        height={30}
        className="object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className="section">
    <div className="sectionInfo">
      <h2 className="heading2">
        You do the business, <br className="sm:block hidden" /> you take
        control.
      </h2>
      <p className="paragraph max-w-[470px] mt-3">
        Buy and sell crypto directly and serve your customers with ease.
      </p>
    </div>

    <div className={`sectionImg flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
