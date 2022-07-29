const ContactContext = props => {
  return (
    <section className="container accent mb-[4.5rem]">
      <h2 className="heading text-black-custom capitalize max-w-[8ch]">
        Contact Details
      </h2>
      {props.children}
    </section>
  );
};

export default ContactContext;
