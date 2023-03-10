import createPersistedState from "use-persisted-state";
import { IPeople, defaultPeople } from "../interfaces/people";
const usePeopleState = createPersistedState<IPeople>("people");

const usePeople = (initialPeople = defaultPeople) => {
  const [people, setPeople] = usePeopleState(initialPeople);

  return {
    people,
    setPersistedPeople: (people: IPeople) => setPeople(people),
  };
};

export default usePeople;
