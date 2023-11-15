import React from "react";
import Layout from "../../Components/Landing/Layout";
import Nav from "../../Components/Flight/Nav";
import SearchReturnFlight from "../../Components/Flight/SearchReturnFlight";

const FlightReturnFind = () => {
  return (
    <Layout>
      <Nav />
      <SearchReturnFlight />
    </Layout>
  );
};

export default FlightReturnFind;
