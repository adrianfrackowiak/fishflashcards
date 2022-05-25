import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentState } from "../app/features/currentcollectionSlice";
import { cardsState } from "../app/features/flashcardsSlice";
import { CardsComponent } from "../components/Cards";

const CardsPage: NextPage = () => {
  const router = useRouter();
  const pageId = router.query.cardsId;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const data = useSelector(cardsState);

  const collection = data.cards.filter((val) => {
    return val.id == pageId;
  });

  useEffect(() => {
    if (collection.length > 0) {
      dispatch(setCurrentState(collection[0]));
      setLoading(false);
    }
  }, [collection]);

  useEffect(() => {
    if (!loading && collection.length < 1) router.push("/");
  }, [collection, data, loading, router]);
  if (loading) return <p>Loading...</p>;

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
