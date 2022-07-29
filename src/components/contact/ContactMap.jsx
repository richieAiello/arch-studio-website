import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

const ContactMap = props => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="z-0 container--small h-[367px] mb-[4.5rem]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup className="max-w-[30ch]">
          A pretty CSS3 popup. Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
