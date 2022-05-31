import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { HomeComponent } from "../components/Home";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { setState } from "../app/features/allCardsDataSlice";
import { useDispatch } from "react-redux";
import { ICardsCollection } from "../app/interfaces/ICardsCollection";
const prisma = new PrismaClient();

interface Props {
  collections: ICardsCollection[];
}

const Home: NextPage<Props> = ({ collections }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (collections) {
      dispatch(setState(collections));
      setLoading(false);
    }
  }, [collections, dispatch]);

  if (loading) return <Loading />;

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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const collections = await prisma.collections.findMany({
    include: {
      cards: true,
    },
  });

  return { props: { collections } };
};
