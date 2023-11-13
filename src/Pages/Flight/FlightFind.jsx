import React from "react";
import Layout from "../../Components/Landing/Layout";
import Nav from "../../Components/Flight/Nav";
import SearchFlight from "../../Components/Flight/SearchFlight";

const FlightFind = () => {
  return (
    <Layout>
      <Nav />
      <SearchFlight />
    </Layout>
  );
};

export default FlightFind;
