import SharedHero from '../components/shared/SharedHero';
import AboutContext from '../components/about/AboutContext';
import Leaders from '../components/about/leaders/Leaders';

const About = props => {
  return (
    <main className="mt-24">
      <SharedHero
        heading="Your team of professionals"
        text="Our small team of world-class professionals will work with you every step of the way. 
          Strong relationships are at the core of everything we do. This extends to the 
          relationship our projects have with their surroundings."
        flavor="About"
        mod="about"
      />
      <AboutContext />
      <Leaders />
    </main>
  );
};

export default About;
