import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fish Flashards</title>
        <meta name="description" content="Flashcards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Flashcards</h1>
    </div>
  );
};

export default Home;
