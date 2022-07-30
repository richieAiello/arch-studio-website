const HeroImage = props => {
  return (
    <picture>
      <source srcSet={props.desktop} media="(min-width: 1440px)" />
      <source srcSet={props.tablet} media="(min-width: 500px)" />
      <img
        src={props.mobile}
        alt=""
        className="absolute h-full w-full object-cover -z-10 top-0 left-0"
      />
    </picture>
  );
};

export default HeroImage;
