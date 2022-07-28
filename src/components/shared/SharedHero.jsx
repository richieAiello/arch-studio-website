import '../../styles/shared.css';

const SharedHero = props => {
  return (
    <section className="container--small relative h-[240px] w-full mb-[365px]">
      <div className="accent-hero absolute bg-white max-w-[343px] h-max left-0 top-[195px] pl-8 pr-4 pt-16 sm:pr-0">
        <h1 className="text-black-custom font-bold text-[3rem] leading-[3.25rem] -tracking-[1.2px] mb-5">
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
      <span
        aria-hidden
        className="hidden md:block absolute right-0 top-[204px] text-silver-custom
        font-bold text-[7.5rem] leading-[12.5rem] -tracking-[3px]"
      >
        {props.flavor}
      </span>
    </section>
  );
};

export default SharedHero;
