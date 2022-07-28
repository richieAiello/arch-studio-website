const PortfolioImage = props => {
  return (
    <picture>
      <source
        srcSet={`./portfolio/desktop/image-${props.image}.jpg`}
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`./portfolio/tablet/image-${props.image}.jpg`}
        media="(min-width: 375px)"
      />
      <img
        src={`./portfolio/mobile/image-${props.image}.jpg`}
        alt=""
        className="absolute -z-10 h-full w-full object-cover left-0 top-0"
      />
    </picture>
  );
};

export default PortfolioImage;
