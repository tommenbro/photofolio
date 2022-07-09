import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";

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
      <Hero />
    </div>
  );
}
