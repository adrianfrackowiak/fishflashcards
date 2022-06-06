import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCollections, signIn } from "../../app/features/userSlice";
import { auth } from "../../app/utils/firebase";

export const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();
  const router = useRouter();

  const signUpToApp = (e: any) => {
    e.preventDefault();

    if (password === confirm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
          dispatch(
            signIn({ email: userAuth.user.email, uid: userAuth.user.uid })
          );

          dispatch(setCollections([]));
          router.push("/");
        })
        .catch((error) => {
          console.error(error.code);
        });
    } else {
      setError("Password did not match");
    }
  };

  return (
    <div className="relative aspect-[12/8] w-full h-full bg-white flex items-center flex-col rounded-md border border-gray-200 p-10">
      <h2 className="font-black text-[1.5rem] mb-12">FishFlashCards</h2>
      <form action="post" className="flex flex-col items-center w-full h-auto">
        <label
          htmlFor="email"
          className="text-xs font-semibold text-gray-600 uppercase mb-2 w-1/2"
        >
          email
        </label>
        <input
          type="email"
          name="email"
          placeholder="johndoe@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-1/2 border border-black rounded-md py-2 px-4 mb-8"
        />
        <label
          htmlFor="password"
          className="text-xs font-semibold text-gray-600 uppercase mb-2 w-1/2"
        >
          password
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-1/2 border border-black rounded-md py-2 px-4 mb-8"
          required
        />
        <label
          htmlFor="confirm"
          className="text-xs font-semibold text-gray-600 uppercase mb-2 w-1/2"
        >
          confirm password
        </label>
        <input
          type="password"
          name="confirm"
          placeholder="confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-1/2 border border-black rounded-md py-2 px-4"
          required
        />
        <div className="flex justify-between mb-8 mt-1 w-1/2">
          <p>{error}</p>
        </div>
        <button
          type="submit"
          onClick={signUpToApp}
          className="w-1/2 py-2 rounded-md bg-blue-700 text-white font-semibold"
        >
          Sign Up
        </button>
        <Link href="/signin">
          <span className="text-blue-700 cursor-pointer w-1/2 text-center mt-10">
            Already have an account? Sign in
          </span>
        </Link>
      </form>
    </div>
  );
};
