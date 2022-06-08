import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MdLibraryBooks,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { userState } from "../../../app/features/userSlice";
import { ICardsCollection } from "../../../app/interfaces/ICardsCollection";

export const Catalog = () => {
  const user = useSelector(userState);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState<boolean>(true);
  const [privateCol, setPrivateCol] = useState<ICardsCollection[]>([]);
  const [sharedCol, setSharedCol] = useState<ICardsCollection[]>([]);

  useEffect(() => {
    if (user.user?.collections) {
      setPrivateCol(
        user.user.collections.filter((val) => {
          return val.isPrivate === false;
        })
      );

      setSharedCol(
        user.user.collections.filter((val) => {
          return val.isPrivate === true;
        })
      );
    }
  }, [user]);

  return (
    <>
      {user.user && (
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
      )}

      {isCatalogModalOpen && user.user && (
        <>
          {privateCol.length > 0 && (
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
          )}
          {sharedCol.length > 0 && (
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
          )}
          <li>
            <button className="w-full py-2 rounded-md bg-blue-700 text-white">
              New collection
            </button>
          </li>
        </>
      )}
    </>
  );
};
