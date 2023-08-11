"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cryptos } from "@public/assets/glassy";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Hero = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [active, setActive] = useState("Home");


  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setupProviders();
  }, []);


  return (
    <section id="home" className={`flex md:flex-row flex-col paddingY`}>
      <div className={`flex-1 flexStart flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[42px] text-white ss:leading-[65px] leading-[45px]">
            Fastest & secure platform to
            <span className="text-gradient"> Exchange</span> crypto
          </h1>
        </div>

        <p className={`paragraph max-w-[470px] mt-5`}>
          Buy and sell cryptocurrencies, 10M wallets with over $30 billion in
          transactions
        </p>
        {
         
              providers &&
              Object.values(providers).map((provider) => (
                <div className="sm:flex hidden mt-8">
                  {
                    session?.user ? (
                      <></>
                    ):(
                      <button
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        className="bg-blue-gradient text-primary active:text-white py-2 px-3 rounded-2xl font-semibold"
                      >
                        Get Started
                      </button>
                    )
                  }
                  
                </div>
              ))
        }
        
        
      </div>

      <div className={`flex-1 flex flexCenter md:my-0 my-10 relative`}>
        <Image
          src={cryptos}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`sm:hidden flexCenter`}>
        
      </div>
    </section>
  );
};

export default Hero;
