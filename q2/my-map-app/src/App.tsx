import { createContext, useState, useContext } from "react";
import Friends from "./pages/Friends";
import Friend from "./pages/Friend";
import { defaultPeople, IPeople } from "./interfaces/api";

import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useOutletContext,
} from "react-router-dom";

export type PeopleContextType = {
  people: IPeople | null;
  setPeople: (p: IPeople) => {};
};

const Container = () => {
  const [people, setPeople] = useState<IPeople | null>(defaultPeople);
  return (
    <>
      <Outlet context={{ people, setPeople }} />
    </>
  );
};

export default () => {
  // const selectPeople = (people: IPeople) => {
  //   console.log('Set people at App level', { people });
  //   setPeople(people);
  // }

  return (
    <>
      {/* <Friends /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Container />}>
            <Route path="/" element={<Friends />} />
            <Route path="friend/:id" index element={<Friend />} />
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Friend /> */}
    </>
  );
};

export function usePeople() {
  return useOutletContext<PeopleContextType>();
}
