import ArrowLink from '../../shared/ArrowLink';

const HeroContext = props => {
  return (
    <div className=" text-white font-bold">
      <h1 className="heading--hero mb-12 text-shadow max-w-[10ch] md:mb-20">
        {props.heading}
      </h1>
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
