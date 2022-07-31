import { useRef } from 'react';
import { Link } from 'react-router-dom';
import FeaturedCardImage from './FeaturedCardImage';

const FeaturedCard = props => {
  const linkRef = useRef(null);

  const handleCardClick = e => {
    linkRef.current.click();
  };

  const handleKeyDown = e => {
    e.key === 'Enter' && handleCardClick();
  };
  return (
    <div
      className="relative mb-6 h-[240px] text-white duration-[400ms]
      bg-gradient-to-b from-[rgba(0,0,0,.01%)] to-[rgba(0,0,0,49.9%)]
      cursor-pointer focus:text-black-custom hover:text-black-custom
      focus:bg-[rgba(255,255,255,.75)] hover:bg-[rgba(255,255,255,.75)]
      lg:h-[560px]"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="link"
    >
      <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10">
        <h3 className="heading--sub">{props.heading}</h3>
        <p className="opacity-75">View All Projects</p>
        <Link
          to="portfolio"
          ref={linkRef}
          tabIndex="-1"
          className="ninja"
        />
      </div>
      <span
        className="hidden absolute right-4 bottom-24 font-bold text-[250px] text-white opacity-50
        md:block lg:top-32 lg:-right-4"
      >
        {props.text}
      </span>
      <FeaturedCardImage image={props.image} />
    </div>
  );
};

export default FeaturedCard;
