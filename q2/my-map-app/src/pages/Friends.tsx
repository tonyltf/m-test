import { useEffect, useState } from "react";
import ReactPlaceholder from "react-placeholder";

import Card from "../components/Card";
import { IPeople, defaultPeople } from "../interfaces/people";
import { VITE_API_KEY, VITE_API_PATH } from "../environmentVariables";
import usePeople from "../hooks/People";

import styles from "../styles/friends.module.css";
import "react-placeholder/lib/reactPlaceholder.css";
import Logger from "../utils/Logger";

export default () => {
  const [peopleList, setPeopleList] = useState<IPeople[]>([]);
  const { setPersistedPeople } = usePeople(defaultPeople);

  useEffect(() => {
    let retryCount = 0;
    const fetchPeopleLlist = async () => {
      let response;
      try {
        response = await fetch(VITE_API_PATH, {
          headers: {
            Authorization: `Bearer ${VITE_API_KEY}`,
          },
        });
      } catch (e) {
        Logger.error(e);
      }

      if (response?.ok) {
        const result = await response.json();
        setPeopleList(result);
      } else {
        if (response?.status === 429) {
          const resetTime = parseInt(response?.headers?.get("x-ratelimit-reset") || '0', 10) ;
          let retryAfter: number;
          if (resetTime > new Date().getTime() / 1000) {
            retryAfter = resetTime * 1000 - new Date().getTime();
          } else {
            retryAfter = Math.pow(2, retryCount++) * 1000 + Math.random() * 1000 // exponential backoff;
          }
          Logger.log(`Reached rate limit, will be retry after ${retryAfter/1000} second(s)`);
          setTimeout(fetchPeopleLlist, retryAfter);
        }
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
