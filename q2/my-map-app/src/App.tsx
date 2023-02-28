import { useEffect, useState } from "react";
import Card from "./components/Card";
import styles from "./styles/app.module.css";
import { IPeople } from "./interfaces/api";

const env = import.meta.env;

function App() {

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
    <div className={styles.cardContainer}>
      {peopleList.map(people => <Card firstName={people.name.first} lastName={people.name.last} picture={people.picture} />)}
    </div>
  );
}

export default App;
