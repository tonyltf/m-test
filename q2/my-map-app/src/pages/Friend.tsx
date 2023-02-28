// import GoogleMapReact from "google-map-react";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { IPeople } from "../interfaces/api";
import styles from "../styles/friend.module.css";
// import { PeopleContext } from '../App';
import { useCallback, useContext, useEffect } from "react";
import { Link, useParams, redirect, useNavigate } from "react-router-dom";
import { usePeople } from "../App";
import Card from "../components/Card";

const env = import.meta.env;

export default (props: any) => {
  let { id } = useParams();
  const { people, setPeople } = usePeople();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: env.VITE_MAP_KEY, // ,
  });
  const navigate = useNavigate();
  console.log({ people, id });
  useEffect(() => {
    if (people?._id !== id) {
      navigate("/");
    }
  }, [])

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "50vh",
        }}
        center={{
          lat: people?.location.latitude || 0,
          lng: people?.location.longitude || 0,
        }}
        zoom={8}
        onLoad={(map) => {
          const marker = new google.maps.Marker({
            position: {
              lat: people?.location.latitude || 0,
              lng: people?.location.longitude || 0,
            },
            map,
          });
          console.log({ marker });
        }}
      >

      </GoogleMap>
    );
  };

  return (
    <>
      {loadError? <div>{loadError.message}</div> : <></>}
      <div className={styles.header}>
        <Link to="/" className={styles.back}>
          &lt;
        </Link>
        <div className={styles.title}>Yours Friends</div>
      </div>
      {isLoaded ? renderMap() : <div>Loading...</div>}
      <div>
        {people?._id && <Card id={people?._id || ''} firstName={people?.name.first || ''} lastName={people?.name.last || ''} picture={people?.picture} />}
      </div>
    </>
  );
};
