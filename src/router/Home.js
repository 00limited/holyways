import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import NavbarUser from "../components/NavbarUser";

const Home = () => {
  return (
    <div>
      <NavbarUser />
      <Banner />
    </div>
  );
};

export default Home;
