import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentState } from "../app/features/currentCardsCollectionSlice";
import { cardsState, setState } from "../app/features/allCardsDataSlice";
import { CardsComponent } from "../components/Cards";
import { Loading } from "../components/Loading";
import { ICardsCollection } from "../app/interfaces/ICardsCollection";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Props {
  collections: ICardsCollection[];
}

const CardsPage: NextPage<Props> = ({ collections }) => {
  const router = useRouter();
  const pageId = router.query.cardsId;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const data = useSelector(cardsState);

  useEffect(() => {
    if (collections) {
      dispatch(setState(collections));
    }
  }, [collections, dispatch]);

  useEffect(() => {
    const collection = data.cards.filter((val) => {
      return val.id == pageId;
    });

    if (data.cards.length > 0) {
      if (collection.length > 0) {
        dispatch(setCurrentState(collection[0]));
        setLoading(false);
      } else {
        router.push("/");
        setLoading(false);
      }
    }
  }, [data, dispatch, pageId, router]);

  if (loading) return <Loading />;

  return (
    <div>
      <Head>
        <title>Fish Flashcards</title>
        <meta name="description" content="Flashcards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CardsComponent />
    </div>
  );
};

export default CardsPage;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const collections = await prisma.collections.findMany({
    include: {
      cards: true,
    },
  });

  return { props: { collections } };
};
