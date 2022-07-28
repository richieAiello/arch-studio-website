import ArrowLink from '../../shared/ArrowLink';

const HeroContext = props => {
  return (
    <div className=" text-white max-w-[311px] font-bold">
      <h1 className="heading--hero mb-4 text-shadow">
        {props.heading}
      </h1>
      <p className="mb-16 text-shadow text-[1.5rem] tracking-tight">
        {props.text}
      </p>
      <ArrowLink
        path="portfolio"
        className="pl-[2.3125rem] w-[min(100%,252px)]"
      >
        See Our Portfolio
      </ArrowLink>
    </div>
  );
};

export default HeroContext;
