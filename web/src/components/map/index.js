import GoogleMapReact from 'google-map-react';
import './styles.css';
import Marker from '../marker';

const Map = () => {

  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
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