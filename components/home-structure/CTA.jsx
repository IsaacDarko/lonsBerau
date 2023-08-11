import styles from "../../styles/style";
import Button from "./Button";

const CTA = () => (
  <section className="flexCenter marginY padding sm:flex-row flex-col bg-opacity-50 backdrop-filter backdrop-blur-lg bg-gray-900 rounded-[20px] box-shadow">
    <div className="flex-1 flex flex-col">
      <h2 className="heading2">Start trading now!</h2>
    </div>

    <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button
        styles={`bg-blue-gradient text-primary active:text-white py-2.5`}
      />
    </div>
  </section>
);

export default CTA;
