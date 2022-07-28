const HomeContext = props => {
  return (
    <section className="container accent relative mb-28">
      <h2 className="heading pt-[4.25rem] mb-[1.375rem] max-w-[10ch]">
        Welcome to Arch Studio
      </h2>
      <p className="mb-5 text-grey-dark-custom">
        We have a unique network and skillset to help bring your
        projects to life. Our small team of highly skilled individuals
        combined with our large network put us in a strong position to
        deliver exceptional results.
      </p>
      <p className="mb-5 text-grey-dark-custom">
        Over the past 10 years, we have worked on all kinds of
        projects. From stations to high-rise buildings, we create
        spaces that inspire and delight.
      </p>
      <p className=" text-grey-dark-custom">
        We work closely with our clients so that we understand the
        intricacies of each project. This allows us to work in harmony
        the surrounding area to create truly stunning projects that
        will stand the test of time.
      </p>
      <span
        className="hidden absolute left-0 top-0 md:block"
        aria-hidden
      >
        Welcome
      </span>
    </section>
  );
};

export default HomeContext;
