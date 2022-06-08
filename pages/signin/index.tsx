import { onAuthStateChanged } from "firebase/auth";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../app/features/userSlice";
import { auth } from "../../app/utils/firebase";

import { SignIn } from "../../components/SignIn";

const SignInPage: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        router.push("/");
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="w-screen h-screen flex relative">
      <Head>
        <title>Sign in to Fish Flashcards</title>
        <meta name="description" content="Flashcards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-3/5 bg-[url('/signin.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full mx-auto flex items-center justify-center p-10">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
