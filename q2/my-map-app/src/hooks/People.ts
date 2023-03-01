import createPersistedState from "use-persisted-state";
import { IPeople, defaultPeople } from "../interfaces/api";
const usePeopleState = createPersistedState<IPeople>("people");

const usePersistedPeople = (initialPeople = defaultPeople) => {
  const [people, setPeople] = usePeopleState(initialPeople);

  return {
    people,
    setPersistedPeople: (people: IPeople) => setPeople(people),
  };
};

export default usePersistedPeople;
