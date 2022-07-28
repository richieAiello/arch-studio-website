import { useRef } from 'react';
import PortfolioImage from './PortfolioImage';

const PortfolioCard = props => {
  const linkRef = useRef(null);

  const handleCardClick = e => {
    linkRef.current.click();
  };

  return (
    <div
      onClick={handleCardClick}
      tabIndex="0"
      role="link"
      className="relative h-[240px] w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,.5)]
      text-white duration-[400ms] hover:text-black-custom focus:text-black-custom 
      hover:bg-[rgba(255,255,255,.75)] focus:bg-[rgba(255,255,255,.75)]"
    >
      <div className="absolute left-6 bottom-6">
        <h2 className="heading--sub capitalize">{props.heading}</h2>
        <p className="capitalize opacity-75">{props.text}</p>
        <a
          href={props.link}
          tabIndex="-1"
          className="ninja"
          ref={linkRef}
          target="_blank"
        />
      </div>
      <PortfolioImage image={props.image} />
    </div>
  );
};

export default PortfolioCard;
