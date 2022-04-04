import GoogleMapReact from 'google-map-react';
import './styles.css';
import Marker from '../marker';

const Map = () => {

  // Minha Chave API - GoogleMapReact
  // key: "AIzaSyAJav92MVud31_U4j3MJsKA7788v8pyDLc"
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek' }}
        center={{
          lat: -2.526949,
          lng: -44.252671,
        }}
        defaultZoom={15}
      >
        <Marker lat={-2.526949} lng={-44.252671} />

      </GoogleMapReact>
    </div>
  );
}

export default Map;