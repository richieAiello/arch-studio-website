import FlavorText from './FlavorText';

const SharedHero = props => {
  return (
    <section className="container--small relative mb-[22.8125rem] md:mb-[12.5rem]">
      <div className="bg-[rgba(0,0,0,.35)] h-[240px] w-full md:h-[720px] lg:w-[635px]">
        <div
          className="accent--hero absolute bg-white max-w-[343px] h-max left-0 top-[195px] pl-8 pr-4 pt-16
          sm:pr-0 md:right-0 md:bottom-0 md:left-[unset] md:top-[unset] md:max-w-[515px] md:pt-[5.5rem] md:pl-[3.6875rem]
          lg:pt-40 lg:pl-[11.375rem] lg:max-w-[628px]"
        >
          <h1 className="heading text-black-custom mb-5 md:mb-[2.375rem] lg:mb-[3.375rem]">
            {props.heading}
          </h1>
          <p className="text-grey-dark-custom">{props.text}</p>
        </div>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`./${props.mod}/desktop/image-hero.jpg`}
          />
          <source
            media="(min-width: 500px)"
            srcSet={`./${props.mod}/tablet/image-hero.jpg`}
          />
          <img
            src={`./${props.mod}/mobile/image-hero.jpg`}
            alt=""
            className="relative h-full w-full -z-10 object-cover lg:w-[635px]"
          />
        </picture>
        <FlavorText
          className="top-[300px] right-2 lg:top-[208px]"
          text={props.flavor}
        />
      </div>
    </section>
  );
};

export default SharedHero;
