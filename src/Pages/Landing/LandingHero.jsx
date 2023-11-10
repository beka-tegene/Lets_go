import React from "react";
import Layout from "../../Components/Landing/Layout";
import Hero from "../../Components/Landing/Hero";
import Cards from "../../Components/Landing/Cards";
import News from "../../Components/Landing/News";
import AboutUs from "../../Components/Landing/AboutUs";
import Service from "../../Components/Landing/Service";
import Footer from "../../Components/Landing/Footer";
import Partner from "../../Components/Landing/Partner";

const LandingHero = () => {
  return (
    <Layout>
      <Hero />
      <Cards />
      <News />
      <AboutUs />
      <Service />
      <Partner />
      <Footer />
    </Layout>
  );
};

export default LandingHero;
