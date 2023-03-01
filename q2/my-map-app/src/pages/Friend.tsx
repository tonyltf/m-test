import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

import Card from "../components/Card";
import { VITE_MAP_KEY } from "../environmentVariables";

import styles from "../styles/friend.module.css";
import usePersistedPeople from "../hooks/People";

export default () => {
  let { id } = useParams();
  const { people } = usePersistedPeople();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: VITE_MAP_KEY,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (people?._id !== id) {
      navigate("/");
    }
  }, []);

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
      ></GoogleMap>
    );
  };

  return (
    <>
      {loadError ? <div>{loadError.message}</div> : <></>}
      <div className={styles.header}>
        <Link to="/" className={styles.back}>
          &lt;
        </Link>
        <div className={styles.title}>Yours Friends</div>
      </div>
      {isLoaded ? renderMap() : <div>Loading map...</div>}
      <div>
        {people?._id && (
          <Card
            id={people?._id || ""}
            firstName={people?.name.first || ""}
            lastName={people?.name.last || ""}
            picture={people?.picture}
            isLink={false}
          />
        )}
      </div>
    </>
  );
};
