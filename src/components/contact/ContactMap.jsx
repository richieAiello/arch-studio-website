import { forwardRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const ContactMap = (props, ref) => {
  return (
    <MapContainer
      center={[35.15850295401163, -90.03239171984112]}
      maxZoom={5}
      minZoom={5}
      zoomDelta={10}
      zoom={5}
      scrollWheelZoom={false}
      touchZoom={false}
      dragging={false}
      className="relative z-0 container--small h-[367px] mb-[4.5rem]"
      ref={ref}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {props.children}
    </MapContainer>
  );
};

export default forwardRef(ContactMap);
