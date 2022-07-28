import ArrowLink from '../../shared/ArrowLink';
import AboutUsImage from './AboutUsImage';

const AboutUs = props => {
  return (
    <section
      className="container--small relative flex flex-col justify-center pl-8 h-[560px] 
      bg-[rgba(0,0,0,.5)] mb-[4.5rem]"
    >
      <h2 className="heading text-white max-w-[10ch] mb-6">
        Small team, big ideas
      </h2>
      <ArrowLink path="about" className="w-[187px] pl-[2.1875rem]">
        About Us
      </ArrowLink>
      <AboutUsImage />
    </section>
  );
};

export default AboutUs;
