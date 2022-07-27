import { useRef } from 'react';
import { Link } from 'react-router-dom';
import FeaturedCardImage from './FeaturedCardImage';

const FeaturedCard = props => {
  const linkRef = useRef(null);

  const handleCardClick = e => {
    linkRef.current.click();
  };
  return (
    <div
      className="relative mb-6 h-[240px] text-white duration-[400ms]
      bg-gradient-to-b from-[rgba(0,0,0,.01%)] to-[rgba(0,0,0,49.9%)]
      cursor-pointer focus:text-black-custom hover:text-black-custom
      focus:bg-white hover:bg-[rgba(255,255,255,.75)]"
      onClick={handleCardClick}
      tabIndex="0"
    >
      <div className="absolute left-6 bottom-6">
        <h3 className="font-bold text-[2rem] leading-10">
          {props.heading}
        </h3>
        <Link
          to="portfolio"
          ref={linkRef}
          tabIndex="-1"
          className="opacity-75"
        >
          View All Projects
        </Link>
      </div>
      <span className="hidden absolute md:block">{props.text}</span>
      <FeaturedCardImage image={props.image} />
    </div>
  );
};

export default FeaturedCard;
