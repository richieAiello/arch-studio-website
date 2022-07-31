import FlavorText from '../shared/FlavorText';

const HomeContext = props => {
  return (
    <section className="container accent relative mb-28 md:mb-[14.75rem] lg:mb-[12.5rem] lg:flex lg:justify-end">
      <div className="lg:pt-[4.625rem] lg:max-w-[446px] lg:mr-[7.8125rem]">
        <h2 className="heading mb-[1.375rem] max-w-[10ch] md:mb-10 lg:mb-[2.6875rem]">
          Welcome to Arch Studio
        </h2>
        <p className="mb-6 text-grey-dark-custom">
          We have a unique network and skillset to help bring your
          projects to life. Our small team of highly skilled
          individuals combined with our large network put us in a
          strong position to deliver exceptional results.
        </p>
        <p className="mb-6 text-grey-dark-custom">
          Over the past 10 years, we have worked on all kinds of
          projects. From stations to high-rise buildings, we create
          spaces that inspire and delight.
        </p>
        <p className=" text-grey-dark-custom">
          We work closely with our clients so that we understand the
          intricacies of each project. This allows us to work in
          harmony the surrounding area to create truly stunning
          projects that will stand the test of time.
        </p>
      </div>
      <img
        src="./home/desktop/image-welcome.jpg"
        alt=""
        className="hidden relative -z-20 lg:block"
      />
      <FlavorText
        text="Welcome"
        className="-top-16 lg:left-0 lg:top-0 lg:-z-10"
      />
    </section>
  );
};

export default HomeContext;
