import { Sidebar } from "../Sidebar";
import { Flashcards } from "./Flashcards";

export const CardsComponent = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Flashcards />
    </div>
  );
};
