import { Main } from "./Main";
import { Sidebar } from "../Sidebar";

export const HomeComponent = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
};
