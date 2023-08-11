import { stats } from "@public/assets/constants";

const Stats = () => (
  <section className="flexCenter flex-row flex-wrap sm:mb-20 mb-6">
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="font-poppins font-semibold sm:text-3xl text-2xl sm:leading-[53.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal sm:text-[20.45px] text-[15.45px] sm:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
