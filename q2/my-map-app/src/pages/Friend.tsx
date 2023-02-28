// import GoogleMapReact from "google-map-react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { IPeople } from "../interfaces/api";
import styles from "../styles/friend.module.css";
// import { PeopleContext } from '../App';
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { usePeople } from "../App";

const env = import.meta.env;

export default (props: any) => {
  let { id } = useParams();
  const { people, setPeople } = usePeople();
  console.log({ people, id });
  const AnyReactComponent = ({ text }: { text?: string }) => <div>{text}</div>;
  // const { people } = useContext(PeopleContext)
  // console.log('useContext', { people });

  return (
    <div className={styles.mapContainer}>
      <LoadScript googleMapsApiKey={env.VITE_MAP_KEY}>
        <GoogleMap
          mapContainerStyle={{
            width: "400px",
            height: "400px",
          }}
          center={{
            lat: -3.745,
            lng: -38.523,
          }}
          zoom={10}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
