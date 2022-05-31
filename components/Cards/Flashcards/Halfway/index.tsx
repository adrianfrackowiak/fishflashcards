import { useDispatch, useSelector } from "react-redux";
import {
  learnState,
  setLearnMode,
} from "../../../../app/features/learnModeSlice";
import { IFlashcard } from "../../../../app/interfaces/IFlashcard";

export const Halfway = () => {
  const learnData = useSelector(learnState);
  const dispatch = useDispatch();

  const onResetFlashCards = (array: IFlashcard[]) => {
    const arr = [...array];

    dispatch(
      setLearnMode({
        cardView: learnData.learnMode.cardView,
        cardIndex: 0,
        cardsLength: arr.length,
        shuffledList: arr.sort(() => Math.random() - 0.5),
        studyAgainList: [],
        gotItList: [],
      })
    );
  };

  return (
    <>
      {learnData.learnMode.studyAgainList.length !== 0 &&
        learnData.learnMode.cardsLength === learnData.learnMode.cardIndex && (
          <div className="max-w-3xl w-full mx-auto flex items-center justify-center mb-10">
            <div className="relative aspect-[12/8] w-full h-full bg-white flex flex-col items-center justify-center rounded-md border border-gray-200 p-10">
              <h4 className="text-xl font-semibold">
                You&apos;re halfway there!
              </h4>
              <p>
                You just learnt {learnData.learnMode.gotItList.length} terms!
                Keep practising to master the remaining{" "}
                {learnData.learnMode.studyAgainList.length}.
              </p>
              <div className="space-x-4 mt-10">
                <button
                  className="py-2 px-10 rounded-lg text-white bg-blue-600"
                  onClick={() =>
                    onResetFlashCards(learnData.learnMode.studyAgainList)
                  }
                >
                  Continue Studying
                </button>
                <button
                  className="py-2 px-10 rounded-lg text-white bg-blue-900"
                  onClick={() =>
                    onResetFlashCards(learnData.learnMode.shuffledList)
                  }
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
    </>
  );
};
