import Link from "next/link";
import { useSelector } from "react-redux";
import { cardsState } from "../../../app/features/flashcardsSlice";

export const Main = () => {
  const data = useSelector(cardsState);

  console.log(data);

  return (
    <div className="bg-gray-50 h-screen w-full px-6 py-6">
      <h4 className="font-semibold text-[1.25rem]">Explore collections</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-10">
        {data.cards.map((col, index) => {
          return (
            <Link key={index} href={`/${col.id}`} passHref>
              <div className="aspect-[12/8] relative bg-white border border-gray-200 rounded-lg p-8 cursor-pointer">
                <h3 className="font-bold text-lg mt-2">{col.name}</h3>
                <p>{col.description}</p>
                <div className="w-7 h-7 absolute right-4 top-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-sm font-semibold">
                    {col.cards.length}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
