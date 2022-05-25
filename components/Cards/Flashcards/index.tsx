import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { currentState } from "../../../app/features/currentcollectionSlice";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IFlashcard } from "../../../app/interfaces/IFlashcard";

export const Flashcards = () => {
  const data = useSelector(currentState);
  const [cardView, setCardView] = useState<string>("question");
  const [cardIndex, setCardIndex] = useState<number>(0);
  const [cardsLength, setCardsLength] = useState<number>(0);
  const [shuffledArray, setShuffledArray] = useState<IFlashcard[]>();

  const changeCardView = () => {
    cardView === "question" ? setCardView("answer") : setCardView("question");
  };

  useEffect(() => {
    if (data.current.cards) {
      const arrayCopy = [...data.current.cards];
      setShuffledArray(arrayCopy.sort(() => Math.random() - 0.5));
    }
  }, [data]);

  if (!shuffledArray) return <p>loading...</p>;

  return (
    <div className="bg-gray-50 h-screen w-full px-6 py-6">
      <h4 className="font-semibold text-[1.25rem]">{data.current.name}</h4>

      <div className="mt-10 flex items-center">
        <div className="max-w-3xl w-full mx-auto flex items-center justify-center">
          <button>
            <BiChevronLeft className="text-4xl text-gray-200 cursor-default" />
          </button>
          <div
            className="relative aspect-[12/8] w-full h-full bg-white flex items-center justify-center rounded-md border border-gray-200 p-10 mx-4"
            onClick={changeCardView}
          >
            <p className="absolute top-4 text-gray-300 uppercase font-semibold text-sm">
              {cardView}
            </p>
            <p className="font-semibold text-3xl">
              {cardView === "question"
                ? shuffledArray[cardIndex].question
                : shuffledArray[cardIndex].answer}
            </p>
          </div>
          <button className="">
            <BiChevronRight className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
