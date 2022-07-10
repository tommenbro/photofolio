import Head from "next/head";
import Image from "next/image";
import Gram from "../components/Gram";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
import { GramData } from "../components/GramData";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Northern Lights</title>
        <meta
          name="description"
          content="Photography portfolio by Nakkerud Studio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Northern Lights Photography"
        message="Norways finest moments captured for you to injoy."
      />
      <Slider slides={SliderData} />
      <Gram grams={GramData} />
      <Footer />
    </div>
  );
}
