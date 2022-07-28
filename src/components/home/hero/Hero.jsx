import { useRef, useState } from 'react';
import HeroContext from './HeroContext';
import HeroImage from './HeroImage';
import HeroBtnWrapper from './HeroBtnWrapper';
import dataHero from './dataHero';

const Hero = props => {
  const [data, setData] = useState(dataHero[0]);

  const buttonsRef = useRef(null);

  const handleButtonClick = e => {
    const index = e.target.dataset.id;
    const btns = [...buttonsRef.current.children];

    btns.forEach(btn => btn.classList.remove('current-btn'));

    btns.filter(btn => {
      btn.dataset.id === index && btn.classList.add('current-btn');
    });

    setData(dataHero[index]);
  };

  return (
    <section
      className="relative h-[560px] mt-24 mb-20 pt-[7.25rem] px-8
      bg-[rgba(0,0,0,.35)] container--small"
    >
      <HeroContext heading={data.heading} text={data.text} />
      <HeroImage
        mobile={data.mobile}
        tablet={data.tablet}
        desktop={data.desktop}
      />
      <HeroBtnWrapper ref={buttonsRef} onClick={handleButtonClick} />
    </section>
  );
};

export default Hero;
