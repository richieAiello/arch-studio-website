import ContactAddress from './ContactAddress';

const ContactContext = props => {
  return (
    <section className="container accent mb-[4.5rem]">
      <h2 className="heading text-black-custom capitalize max-w-[8ch]">
        Contact Details
      </h2>
      <ContactAddress
        heading="Main Office"
        mail="archone@mail.com"
        address="1892 Chenoweth Drive TN"
        phone="123-456-3451"
        // onClick
      />
      <ContactAddress
        heading="Office II"
        mail="archtwo@mail.com"
        address="3399 Wines Lane TX"
        phone="832-123-4321"
        // onClick
      />
    </section>
  );
};

export default ContactContext;
