import { useDispatch, useSelector } from "react-redux";
import {
  learnState,
  setCardView,
} from "../../../../app/features/learnModeSlice";

export const CardsBox = () => {
  const learnData = useSelector(learnState);
  const dispatch = useDispatch();

  const isListEnd = () => {
    if (learnData.learnMode.cardsLength === learnData.learnMode.cardIndex) {
      return true;
    }
    return false;
  };

  const onCardFlip = () => {
    learnData.learnMode.cardView === "question"
      ? dispatch(setCardView("answer"))
      : dispatch(setCardView("question"));
  };

  return (
    <>
      {!isListEnd() && (
        <div className="max-w-3xl w-full mx-auto flex items-center justify-center mb-10">
          <div
            className="relative aspect-[12/8] w-full h-full bg-white flex items-center justify-center rounded-md border border-gray-200 p-10"
            onClick={onCardFlip}
          >
            <p className="absolute top-4 text-gray-300 uppercase font-semibold text-sm">
              {learnData.learnMode.cardView}
            </p>
            <p className="font-semibold text-3xl">
              {learnData.learnMode.cardView === "question"
                ? learnData.learnMode.shuffledList[
                    learnData.learnMode.cardIndex
                  ].question
                : learnData.learnMode.shuffledList[
                    learnData.learnMode.cardIndex
                  ].answer}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
