const AboutUsImage = props => {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet="./home/desktop/image-small-team.jpg"
      />
      <source
        media="(min-width: 500px)"
        srcSet="./home/tablet/image-small-team.jpg"
      />
      <img
        src="./home/mobile/image-small-team.jpg"
        alt=""
        className="absolute w-full h-full -z-10 left-0 top-0 object-cover"
      />
    </picture>
  );
};

export default AboutUsImage;
