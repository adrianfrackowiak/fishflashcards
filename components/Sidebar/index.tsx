import { useSelector } from "react-redux";
import { userState } from "../../app/features/userSlice";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { AuthButtons } from "./AuthButtons";
import { Catalog } from "./Catalog";

export const Sidebar = () => {
  return (
    <div className="w-[16rem] h-screen px-6 py-6 z-30 shadow-md flex flex-col">
      <Link href="/">
        <h2 className="font-bold text-[1.25rem] cursor-pointer">
          FishFlashCards
        </h2>
      </Link>
      <nav className="mt-8 h-full">
        <ul className="flex flex-col h-full">
          <li className="mb-4">
            <Link href="/">
              <span className="text-md font-semibold flex items-center cursor-pointer">
                <AiFillHome className="mr-4" />
                Explore
              </span>
            </Link>
          </li>
          <Catalog />
          <AuthButtons />
        </ul>
      </nav>
    </div>
  );
};
