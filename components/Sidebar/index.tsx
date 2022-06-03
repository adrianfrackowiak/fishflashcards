import { useSelector } from "react-redux";
import { userState } from "../../app/features/userSlice";
import { AiFillHome } from "react-icons/ai";
import {
  MdLibraryBooks,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export const Sidebar = () => {
  const user = useSelector(userState);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState<boolean>(true);

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

          <li className="mb-4">
            <button
              className="flex items-center text-md font-semibold"
              onClick={() =>
                setIsCatalogModalOpen(isCatalogModalOpen ? false : true)
              }
            >
              <MdLibraryBooks className="mr-4" />
              My catalog{" "}
              {isCatalogModalOpen ? (
                <MdKeyboardArrowUp className="ml-2" />
              ) : (
                <MdKeyboardArrowDown className="ml-2" />
              )}
            </button>
          </li>

          {isCatalogModalOpen && user && (
            <>
              <li className="mb-4">
                <p className="text-xs font-semibold text-gray-600 uppercase mb-2">
                  private
                </p>
                <ul>
                  {user.user?.collections.map((col, index) => {
                    if (col.isPrivate) {
                      return (
                        <li
                          key={index}
                          className="flex items-center cursor-pointer font-semibold py-1 hover:bg-gray-50 rounded-md"
                        >
                          <Link href={`/${col.id}`}>
                            <span className="truncate text-sm">{col.name}</span>
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </li>
              <li className="mb-4">
                <p className="text-xs font-semibold text-gray-600 uppercase mb-2">
                  shared
                </p>
                <ul>
                  {user.user?.collections.map((col, index) => {
                    if (!col.isPrivate) {
                      return (
                        <li
                          key={index}
                          className="flex items-center cursor-pointer font-semibold py-1 hover:bg-gray-50 rounded-md"
                        >
                          <Link href={`/${col.id}`}>
                            <span className="truncate text-sm w-[10rem]">
                              {col.name}
                            </span>
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </li>
              <li>
                <button className="w-full py-2 rounded-md bg-blue-700 text-white">
                  New collection
                </button>
              </li>
            </>
          )}
          {user ? (
            <li className="mt-auto">
              <button className="text-md font-semibold flex items-center">
                <FaUser className="mr-4" />
                Log out
              </button>
            </li>
          ) : (
            <>
              <li className="text-md font-semibold flex items-center">
                Sign In
              </li>
              <li className="text-md font-semibold flex items-center">
                Sign Up
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
