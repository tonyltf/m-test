import { useState } from "react";
import Friends from "./pages/Friends";
import Friend from "./pages/Friend";
import { defaultPeople, IPeople } from "./interfaces/people";

import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useOutletContext,
} from "react-router-dom";

type PeopleContextType = {
  people: IPeople | null;
  setPeople: (p: IPeople) => {};
};

const PeopleContext = () => {
  const [people, setPeople] = useState<IPeople | null>(defaultPeople);
  return (
    <>
      <Outlet context={{ people, setPeople }} />
    </>
  );
};

export default () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PeopleContext />}>
            <Route path="friend/:id" index element={<Friend />} />
            <Route path="*" element={<Friends />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export function usePeople() {
  return useOutletContext<PeopleContextType>();
}
