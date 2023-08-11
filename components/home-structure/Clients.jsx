"use client";
import { clients } from "@public/assets/constants";
import styles from "../../styles/style";
import Image from "next/image";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[141px] min-w-[100px] m-5`}
        >
          <Image
            src={client.logo}
            alt="client_logo"
            className="sm:w-[141px] w-[85px] object-contain"
          /> 
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
