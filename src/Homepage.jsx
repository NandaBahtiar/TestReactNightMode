import React from "react";
import Wrap from "./components/Wrap";
import Jumbotron from "./components/jumbotron";
import Skill from "./components/Skill";
import Project from "./components/project";
import Footer from "./components/Footer";
import Header from "./components/HeaderComponent";
import Http from "./components/axios-http-client/App";

const Homepage = () => {
  return (
    <>
      <Wrap>
        <Header />
        <Jumbotron />
        <Skill />
        <Project />
        <Footer />
        <Http />
      </Wrap>
    </>
  );
};

export default Homepage;
