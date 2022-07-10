import React from "react";
import Hero from "../components/Hero";
import Photofolio from "../components/Photofolio";
import Head from "next/head";
import Footer from "../components/Footer";

const photofolio = () => {
  <Head>
    <title>Northern Lights</title>
    <meta
          name="description"
          content="Photofolio of Northern Lights, by Nakkerud Studio"
        />
  </Head>
  return (
    <div>
      <Hero heading='Our Photofolio' message='All of our photographs, in chronological order.' />
      <Photofolio />
      <Footer />
    </div>
  );
};

export default photofolio;
