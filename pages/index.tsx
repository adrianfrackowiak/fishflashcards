import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { HomeComponent } from "../components/Home";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { cardsState, setState } from "../app/features/allCardsDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { ICardsCollection } from "../app/interfaces/ICardsCollection";
import { auth } from "../app/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  logout,
  setCollections,
  signIn,
  userState,
} from "../app/features/userSlice";
const prisma = new PrismaClient();

interface Props {
  collections: ICardsCollection[];
}

const Home: NextPage<Props> = ({ collections }) => {
  const dispatch = useDispatch();
  const cards = useSelector(cardsState);
  const user = useSelector(userState);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        const usersCollection = cards.cards.filter((val) => {
          return val.createdBy === userAuth.uid;
        });

        dispatch(
          signIn({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
        dispatch(setCollections(usersCollection));
      } else {
        dispatch(logout());
      }
    });
  }, [cards]);

  useEffect(() => {
    if (collections) {
      dispatch(setState(collections));
    }
  }, [collections, dispatch]);

  if (!cards && !user) return <Loading />;

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
