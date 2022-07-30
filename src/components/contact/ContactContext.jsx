const ContactContext = props => {
  return (
    <section className="container accent--secondary mb-[4.5rem] md:mb-[12.5rem]">
      <h2 className="heading text-black-custom capitalize max-w-[8ch] md:mb-[3.875rem]">
        Contact Details
      </h2>
      {props.children}
    </section>
  );
};

export default ContactContext;
