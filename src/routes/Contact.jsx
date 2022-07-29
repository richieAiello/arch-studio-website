import { useRef } from 'react';
import SharedHero from '../components/shared/SharedHero';
import ContactContext from '../components/contact/ContactContext';
import ContactAddress from '../components/contact/ContactAddress';
import ContactMap from '../components/contact/ContactMap';
import { Marker, Popup } from 'react-leaflet';
import ContactForm from '../components/contact/ContactForm';

const Contact = props => {
  const mapRef = useRef(null);
  const markerOneRef = useRef(null);
  const markerTwoRef = useRef(null);
  const mapContainerRef = useRef(null);

  const mapCenter = [35.15850295401163, -90.03239171984112];
  const markerOnePosition = [35.95182441031322, -83.99138161186718];
  const markerTwoPosition = [32.018660600100915, -96.41525801160711];

  const handleMapCenter = e => {
    mapRef.current
      .setMaxZoom(5)
      .setView(mapCenter)
      .closePopup()
      .off('zoom', handleMapCenter);
  };

  const handleViewClick = (e, array, marker) => {
    mapContainerRef.current.scrollIntoView({ behavior: 'smooth' });
    mapRef.current
      .setMaxZoom(15)
      .setView(array, 15)
      .on('zoom', handleMapCenter);
    marker.openPopup();
  };

  return (
    <main className="mt-24">
      <SharedHero
        heading="Tell us about your project"
        text="We’d love to hear more about your project. Please, leave a message below or give 
          us a call. We have two offices, one in Texas and one in Tennessee. If you find 
          yourself nearby, come say hello!"
        mod="contact"
      />
      <ContactContext>
        <ContactAddress
          heading="Main Office"
          mail="archone@mail.com"
          address="1892 Chenoweth Drive TN"
          phone="123-456-3451"
          onClick={e =>
            handleViewClick(
              e,
              markerOnePosition,
              markerOneRef.current
            )
          }
        />
        <ContactAddress
          heading="Office II"
          mail="archtwo@mail.com"
          address="3399 Wines Lane TX"
          phone="832-123-4321"
          onClick={e => {
            handleViewClick(
              e,
              markerTwoPosition,
              markerTwoRef.current
            );
          }}
        />
      </ContactContext>
      <div ref={mapContainerRef} className=" scroll-mt-24">
        <ContactMap ref={mapRef}>
          <Marker
            ref={markerOneRef}
            position={markerOnePosition}
            eventHandlers={{
              click: e =>
                handleViewClick(
                  e,
                  markerOnePosition,
                  markerOneRef.current
                ),
            }}
          >
            <Popup>
              <p className="text-center font-bold">Main Office</p>
              <p className="text-center">1892 Chenoweth Drive, TN</p>
            </Popup>
          </Marker>
          <Marker
            ref={markerTwoRef}
            position={markerTwoPosition}
            eventHandlers={{
              click: e =>
                handleViewClick(
                  e,
                  markerTwoPosition,
                  markerTwoRef.current
                ),
            }}
          >
            <Popup className="">
              <p className="text-center font-bold">Office II</p>
              <p className="text-center">3399 Wines Lane, TX</p>
            </Popup>
          </Marker>
        </ContactMap>
      </div>
      <ContactForm />
    </main>
  );
};

export default Contact;
