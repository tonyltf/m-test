import { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder";

import Card from "../components/Card";
import { IPeople, defaultPeople } from "../interfaces/api";
import { VITE_API_KEY, VITE_API_PATH } from "../environmentVariables";
import usePeople from "../hooks/People";

import styles from "../styles/friends.module.css";
import "react-placeholder/lib/reactPlaceholder.css";

export default () => {
  const [peopleList, setPeopleList] = useState<IPeople[]>([]);
  const { setPersistedPeople } = usePeople(defaultPeople);

  useEffect(() => {
    const fetchPeopleLlist = async () => {
      try {
        const response = await fetch(VITE_API_PATH, {
          headers: {
            Authorization: `Bearer ${VITE_API_KEY}`,
          },
        });
        const result = await response.json();
        setPeopleList(result);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPeopleLlist();
  }, []);

  return (
    <>
      <div className={styles.title}>ALL Friends</div>
      <ReactPlaceholder
        ready={peopleList.length > 0}
        showLoadingAnimation={true}
        type="media"
      >
        <div className={styles.cardContainer}>
          {peopleList?.map((p: IPeople) => (
            <Card
              key={p._id}
              id={p._id}
              firstName={p.name.first}
              lastName={p.name.last}
              picture={p.picture}
              onClick={() => {
                setPersistedPeople(p);
              }}
            />
          ))}
        </div>
      </ReactPlaceholder>
    </>
  );
};
