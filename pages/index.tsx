import type { NextPage } from "next";
import Head from "next/head";
import { HomeComponent } from "../components/Home";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fish Flashcards</title>
        <meta name="description" content="Flashcards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeComponent />
    </div>
  );
};

export default Home;
