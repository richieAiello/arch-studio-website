import FlavorText from './FlavorText';

const SharedHero = props => {
  return (
    <section
      className="container--small relative bg-[rgba(0,0,0,.35)] h-[240px] w-full mb-[22.8125rem]
      md:h-[720px] md:mb-[12.5rem]"
    >
      <div
        className="accent--secondary absolute bg-white max-w-[343px] h-max left-0 top-[195px] pl-8 pr-4 pt-16 
        sm:pr-0 md:right-0 md:bottom-0 md:left-[unset] md:top-[unset] md:max-w-[515px] md:pt-[5.5rem] md:pl-[3.6875rem]"
      >
        <h1 className="heading text-black-custom mb-5 md:mb-[2.375rem]">
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
          className="relative h-full w-full -z-10 object-cover"
        />
      </picture>
      <FlavorText
        className="top-[302px] right-1"
        text={props.flavor}
      />
    </section>
  );
};

export default SharedHero;
