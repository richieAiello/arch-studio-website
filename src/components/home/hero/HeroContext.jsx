import ArrowLink from '../../shared/ArrowLink';

const HeroContext = props => {
  return (
    <div className=" text-white font-bold">
      <h1 className="heading--hero mb-12 text-shadow max-w-[12ch] md:mb-20">
        {props.heading}
      </h1>
      {/* <p className="mb-16 text-shadow text-[1.5rem] tracking-tight">
        {props.text}
      </p> */}
      <ArrowLink
        path="portfolio"
        className="pl-[2.3125rem] w-[min(100%,180px)]"
      >
        Portfolio
      </ArrowLink>
    </div>
  );
};

export default HeroContext;
