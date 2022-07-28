const FeaturedCardImage = props => {
  return (
    <picture>
      <source
        srcSet={`./portfolio/desktop/image-${props.image}.jpg`}
        media="(min-width: 1440px)"
      />
      <img
        src={`./portfolio/tablet/image-${props.image}.jpg`}
        alt=""
        className="absolute top-0 left-0 -z-10 object-cover w-full h-full"
      />
    </picture>
  );
};

export default FeaturedCardImage;
