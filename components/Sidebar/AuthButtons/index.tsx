import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, userState } from "../../../app/features/userSlice";
import { auth } from "../../../app/utils/firebase";

export const AuthButtons = () => {
  const user = useSelector(userState);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    auth.signOut();
  };

  console.log(user.user);

  return (
    <>
      {user.user ? (
        <li className="mt-auto">
          <button
            className="text-md font-semibold flex items-center"
            onClick={logOut}
          >
            <FaUser className="mr-4" />
            Log out
          </button>
        </li>
      ) : (
        <li className="mt-auto space-y-4">
          <Link href="/signin">
            <button className="w-full py-2 rounded-md bg-blue-700 text-white font-semibold">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="w-full py-2 rounded-md text-blue-700 border border-blue-700 font-semibold">
              Sign Up
            </button>
          </Link>
        </li>
      )}
    </>
  );
};
