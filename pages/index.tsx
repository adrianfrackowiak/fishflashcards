import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { HomeComponent } from "../components/Home";
import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { setState } from "../app/features/allCardsDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { ICardsCollection } from "../app/interfaces/ICardsCollection";
import { auth } from "../app/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { logout, signIn, userState } from "../app/features/userSlice";
const prisma = new PrismaClient();

interface Props {
  collections: ICardsCollection[];
}

const Home: NextPage<Props> = ({ collections }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const user = useSelector(userState);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          signIn({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  useEffect(() => {
    if (collections) {
      dispatch(setState(collections));
      setLoading(false);
    }
  }, [collections, dispatch]);

  console.log(auth);
  console.log(user);

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
