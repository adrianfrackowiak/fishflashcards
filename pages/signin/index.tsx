import { signInWithEmailAndPassword } from "firebase/auth";
import { NextPage } from "next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../app/features/userSlice";
import { auth } from "../../app/utils/firebase";

const SignInPage: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();

  const signInToApp = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          signIn({ email: userAuth.user.email, uid: userAuth.user.uid })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form action="post">
        <input
          type="email"
          name="email"
          placeholder="johndoe@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={signInToApp}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
