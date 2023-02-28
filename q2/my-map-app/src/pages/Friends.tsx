import { createContext, useEffect, useState, useContext } from "react";
import Card from "../components/Card";
import styles from "../styles/friends.module.css";
import { IPeople, defaultPeople } from "../interfaces/api";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { PeopleContextType, usePeople } from "../App";
import { useOutletContext } from "react-router-dom";

const env = import.meta.env;

export default () => {
  const [peopleList, setPeopleList] = useState<IPeople[]>([]);
  const { people, setPeople } = usePeople();

  useEffect(() => {
    console.log("useEffect");
    const fetchPeopleLlist = async () => {
      try {
        const response = await fetch(env.VITE_API_PATH, {
          headers: {
            Authorization: `Bearer ${env.VITE_API_KEY}`,
          },
        });
        const result = await response.json();
        console.log({ result });
        // peopleContext.setPeople(result[0]);
        setPeopleList(result);
      } catch (e) {
        console.error(e);
      }
    };
    fetchPeopleLlist();
  }, []);

  console.log("Rendering Friends");
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
                setPeople(p);
              }}
            />
          ))}
        </div>
      </ReactPlaceholder>
    </>
  );
};
