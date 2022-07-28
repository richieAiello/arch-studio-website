import { ReactComponent as Arrow } from '../../assets/arrow-dark.svg';

const ContactAddress = props => {
  return (
    <div className="text-grey-dark-custom mt-10">
      <h3 className="capitalize font-bold leading-[2.1875rem] mb-[0.875rem]">
        {props.heading}
      </h3>
      <address className="mb-[2.6875rem] not-italic">
        <p className="">Mail : {props.mail}</p>
        <p className="">Address: {props.address}</p>
        <p className="">Phone: {props.phone}</p>
      </address>
      <button
        type="button"
        className="capitalize font-bold text-black-custom flex items-center hover:underline"
        onClick={props.onClick}
      >
        View on map
        <Arrow className="ml-6" />
      </button>
    </div>
  );
};

export default ContactAddress;
