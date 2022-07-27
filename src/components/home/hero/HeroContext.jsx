import ArrowLink from '../../shared/ArrowLink';

const HeroContext = props => {
  return (
    <div className=" text-white max-w-[311px] font-bold">
      <h1 className="text-[3rem] leading-[3rem] tracking-[-1.2px] mb-4 text-shadow">
        {props.heading}
      </h1>
      <p className="mb-16 text-shadow text-[1.5rem] tracking-tight">
        {props.text}
      </p>
      <ArrowLink path="portfolio">View Our Portfolio</ArrowLink>
    </div>
  );
};

export default HeroContext;
