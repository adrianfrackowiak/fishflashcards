import { useDispatch, useSelector } from "react-redux";
import { currentState } from "../../../../app/features/currentCardsCollectionSlice";
import {
  learnState,
  setLearnMode,
} from "../../../../app/features/learnModeSlice";
import { IFlashcard } from "../../../../app/interfaces/IFlashcard";

export const AllLearnt = () => {
  const data = useSelector(currentState);
  const learnData = useSelector(learnState);
  const dispatch = useDispatch();

  const isAllLearnt = () => {
    if (
      learnData.learnMode.cardsLength === learnData.learnMode.gotItList.length
    ) {
      return true;
    }
    return false;
  };

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
      {isAllLearnt() && (
        <div className="max-w-3xl w-full mx-auto flex items-center justify-center mb-10">
          <div className="relative aspect-[12/8] w-full h-full bg-white flex flex-col items-center justify-center rounded-md border border-gray-200 p-10">
            <h4 className="text-xl font-semibold">Congratulations!</h4>
            <p>You&apos;ve learnt everything!</p>
            <div className="mt-10">
              <button
                className="py-2 px-10 rounded-lg text-white bg-blue-900"
                onClick={() => onResetFlashCards(data.current.cards)}
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
