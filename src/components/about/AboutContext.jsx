const AboutContext = props => {
  return (
    <section className="container mb-28 md:mb-[12.5rem] lg:flex lg:justify-between">
      <div className="accent--secondary  lg:max-w-[446px]">
        <h2
          className="heading capitalize text-black-custom mb-[1.375rem] max-w-[8ch] md:mb-[3.875rem]
          lg:mb-[3.1875rem]"
        >
          Our Heritage
        </h2>
        <p className="text-grey-dark-custom mb-6">
          Founded in 2007, we started as a trio of architects. Our
          complimentary skills and relentless attention to detail
          turned Arch into one of the most sought after boutique firms
          in the country.
        </p>
        <p className="text-grey-dark-custom mb-6">
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their
          surroundings. We consider every detail from every
          surrounding element to inform our designs.
        </p>
        <p className="text-grey-dark-custom">
          Our small team of world-class professionals provides input
          on every project.
        </p>
      </div>
      <img
        src="./about/desktop/image-heritage.jpg"
        alt=""
        className="hidden lg:block"
      />
    </section>
  );
};

export default AboutContext;
