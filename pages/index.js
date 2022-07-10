import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photofolio</title>
        <meta
          name="description"
          content="Photography portfolio by Nakkerud Studio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        heading="Norse Photofolio"
        message="Norways finest moments captured for you to injoy."
      />
    </div>
  );
}
