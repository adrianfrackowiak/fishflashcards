import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentState } from "../../../app/features/currentCardsCollectionSlice";
import { Loading } from "../../Loading";
import { learnState, setLearnMode } from "../../../app/features/learnModeSlice";
import { Halfway } from "./Halfway";
import { AllLearnt } from "./AllLearnt";
import { Progress } from "./Progress";
import { CardsBox } from "./CardsBox";

export const Flashcards = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const data = useSelector(currentState);
  const learnData = useSelector(learnState);

  useEffect(() => {
    if (data.current.cards) {
      const arr = [...data.current.cards];

      dispatch(
        setLearnMode({
          cardView: "question",
          cardIndex: 0,
          cardsLength: data.current.cards.length,
          shuffledList: [...arr.sort(() => Math.random() - 0.5)],
          studyAgainList: [],
          gotItList: [],
        })
      );

      if (learnData.learnMode.shuffledList) setLoading(false);
    }
  }, [data]);

  console.log(data);

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-50 h-screen w-full px-6 py-6">
      <h4 className="font-semibold text-[1.25rem]">{data.current.name}</h4>

      <div className="mt-10 flex flex-col items-center ">
        <CardsBox />
        <Halfway />
        <AllLearnt />
        <Progress />
      </div>
    </div>
  );
};
