import ArrowLink from '../shared/ArrowLink';
import AboutUsImage from './AboutUsImage';

const AboutUs = props => {
  return (
    <section
      className="container--small relative flex flex-col justify-center pl-8 h-[560px] 
      bg-[rgba(0,0,0,.5)] mb-[4.5rem]"
    >
      <h2
        className="text-white font-bold text-[3rem] leading-[3.25rem] tracking-[-1.71px] 
        max-w-[10ch] mb-6"
      >
        Small team, big ideas
      </h2>
      <ArrowLink path="about" label="Learn about Arch Studio.">
        About Us
      </ArrowLink>
      <AboutUsImage />
    </section>
  );
};

export default AboutUs;
