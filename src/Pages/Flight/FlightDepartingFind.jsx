import React from "react";
import Layout from "../../Components/Landing/Layout";
import Nav from "../../Components/Flight/Nav";
import SearchDepartingFlight from "../../Components/Flight/SearchDepartingFlight";

const FlightDepartingFind = () => {
  return (
    <Layout>
      <Nav />
      <SearchDepartingFlight />
    </Layout>
  );
};

export default FlightDepartingFind;
