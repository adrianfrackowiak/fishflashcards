import { NextPage } from "next";
import Head from "next/head";
import { SignUp } from "../../components/SignUp";

const SignInPage: NextPage = () => {
  return (
    <div className="w-screen h-screen flex relative">
      <Head>
        <title>Sign up to Fish Flashcards</title>
        <meta name="description" content="Flashcards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-3/5 bg-[url('/signin.jpg')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full mx-auto flex items-center justify-center p-10">
        <SignUp />
      </div>
    </div>
  );
};

export default SignInPage;
