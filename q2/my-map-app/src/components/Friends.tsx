import { Suspense, useEffect, useState } from "react";
import Card from "./Card";
import styles from "../styles/friends.module.css";
import { IPeople } from "../interfaces/api";
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

const env = import.meta.env;

export default () => {

  const [peopleList, setPeopleList] = useState<IPeople[]>([]);

  useEffect(() => {
    const fetchPeopleLlist = async () => {
      const response = await fetch(env.VITE_API_PATH, {
        headers: {
          Authorization: `Bearer ${env.VITE_API_KEY}`
        }
      });
      const result = await response.json();
      console.log({ result });
      setPeopleList(result);
    }
    fetchPeopleLlist();
  }, []);

  return (
    <>
      <div className={styles.title}>ALL Friends</div>
      <ReactPlaceholder ready={peopleList.length > 0} showLoadingAnimation={true} type='media'>
        <div className={styles.cardContainer}>
          {peopleList.map(people => <Card firstName={people.name.first} lastName={people.name.last} picture={people.picture} />)}
        </div>
      </ReactPlaceholder>
    </>
  );
}
