import { useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  learnState,
  setCardIndex,
  setCardView,
  setGotItList,
  setStudyAgainList,
} from "../../../../app/features/learnModeSlice";

export const Progress = () => {
  const learnData = useSelector(learnState);
  const dispatch = useDispatch();

  const isListEnd = () => {
    if (learnData.learnMode.cardsLength === learnData.learnMode.cardIndex) {
      return true;
    }
    return false;
  };

  const onNextCard = (dir: string) => {
    if (!isListEnd() && learnData.learnMode.shuffledList) {
      if (learnData.learnMode.cardIndex !== learnData.learnMode.cardsLength) {
        dispatch(setCardIndex(learnData.learnMode.cardIndex + 1));
        dispatch(setCardView("question"));
      }

      if (dir === "got-it") {
        dispatch(
          setGotItList([
            ...learnData.learnMode.gotItList,
            {
              id: learnData.learnMode.cardIndex,
              question:
                learnData.learnMode.shuffledList[learnData.learnMode.cardIndex]
                  .question,
              answer:
                learnData.learnMode.shuffledList[learnData.learnMode.cardIndex]
                  .answer,
            },
          ])
        );
      } else if (dir === "study-again") {
        dispatch(
          setStudyAgainList([
            ...learnData.learnMode.studyAgainList,
            {
              id: learnData.learnMode.cardIndex,
              question:
                learnData.learnMode.shuffledList[learnData.learnMode.cardIndex]
                  .question,
              answer:
                learnData.learnMode.shuffledList[learnData.learnMode.cardIndex]
                  .answer,
            },
          ])
        );
      }
    }
  };

  const handleKeypress = (e: any) => {
    if (e.code === "ArrowLeft") {
      onNextCard("study-again");
    } else if (e.code === "ArrowRight") {
      onNextCard("got-it");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeypress);
    return () => document.removeEventListener("keydown", handleKeypress);
  }, [handleKeypress]);

  return (
    <div className="max-w-3xl w-full mx-auto flex justify-between items-center">
      <button
        className="flex justify-center items-center py-2 w-[8rem] bg-orange-300 rounded-lg"
        onClick={() => onNextCard("study-again")}
      >
        <BiChevronLeft className="text-2xl" /> Study again
      </button>
      <div>
        <p className="mt-6">
          {learnData.learnMode.cardIndex === learnData.learnMode.cardsLength
            ? learnData.learnMode.cardsLength
            : learnData.learnMode.cardIndex + 1}
          /{learnData.learnMode.cardsLength}
        </p>
      </div>
      <button
        className="flex justify-center items-center py-2 w-[8rem] bg-green-300 rounded-lg"
        onClick={() => onNextCard("got-it")}
      >
        Got it <BiChevronRight className="text-2xl" />
      </button>
    </div>
  );
};
