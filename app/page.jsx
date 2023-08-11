import "@styles/home.css";

import {
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Stats,
  Testimonials,
  Hero,
} from "../components/home-structure";

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="bg-primary my-12 flexStart">
        <div className="boxWidth">
          <Hero />
        </div>
      </div>

      <div className="bg-primary paddingX flexCenter">
        <div className="boxWidth">
          <Stats />
          <Business />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
